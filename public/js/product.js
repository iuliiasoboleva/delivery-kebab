function submitProduct(target) {
  const { img, name, price, coords, address, discount } = target;
  const { action, method } = target;

  const text = {
    name: name.value,
    coords: coords.value,
    address: address.value,
    price: price.value,
    discount: discount.value,
  };

  fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(text),
  })
    .then((response) => response.json())
    .then((data) => {
      const image = new FormData();
      image.append('file', img.files[0]);
      fetch(action, {
        method,
        body: image,
      })
        .then((response) => response.json())
        .then((data) => {
          const p = document.createElement('p');
          p.innerText = data.message;
          const out = document.getElementById('out');
          out.innerHTML = '';
          out.append(p);
          out.style.display = 'block';
        });
    })
    .catch(console.log);
}
function createProduct(target) {
  fetch('/product/add', {})
    .then((response) => response.text())
    .then((data) => {
      const inner = document.getElementById('inner');
      inner.innerHTML = data;
      ymaps.ready(init);
    });
}
function buyProduct(target) {
  const id = target.id.split('_')[1];
  fetch(`/product/buy/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const div = document.getElementById(`product_${id}`);
      const p = document.createElement('p');
      p.innerText = data.message;
      p.className = 'success-block';
      div.append(p);
      target.style = 'display: none';
    });
}
