function submitLogin(target) {
  const { login, password } = target;
  const { action, method } = target;
  fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: login.value,
      password: password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        const p = document.createElement('p');
        p.innerText = data.message;
        const out = document.getElementById('out');
        out.innerHTML = '';
        out.append(p);
        out.style.display = 'block';
      } else {
        location.reload();
      }
    })
    .catch(console.log);
}

function submitRegister(target) {
  const { login, phone, password, role, address, coords } = target;
  const { action, method } = target;

  fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: login.value,
      phone: phone.value,
      password: password.value,
      role: role.value,
      address: address.value,
      coords: coords.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        const p = document.createElement('p');
        p.innerText = data.message;
        const out = document.getElementById('out');
        out.innerHTML = '';
        out.append(p);
        out.style.display = 'block';
      } else {
        location.reload();
      }
    })
    .catch(console.log);
}

function formLogin(target) {
  fetch('/login', {})
    .then((response) => response.text())
    .then((data) => {
      const inner = document.getElementById('inner');
      inner.innerHTML = data;
    });
}

function formRegister(target) {
  fetch('/registration', {})
    .then((response) => response.text())
    .then((data) => {
      const inner = document.getElementById('inner');
      inner.innerHTML = data;
      ymaps.ready(init);
    });
}

function logOut(target) {
  fetch('/logout', {})
    .then((response) => response.json())
    .then((data) => {
      if (data.message == 'logout') {
        location.reload();
      }
    })
    .catch(console.log);
}

function courierProfile(target) {
  fetch('/courier/profile', {})
    .then((response) => response.text())
    .then((data) => {
      const inner = document.getElementById('inner');
      inner.innerHTML = data;
    });
}

function userProfile(target) {
  fetch('/profile', {})
    .then((response) => response.text())
    .then((data) => {
      const inner = document.getElementById('inner');
      inner.innerHTML = data;
    });
}
