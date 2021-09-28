// Общие скрипты
const body = document.body;

body.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ловим кнопки submit
  switch (e.target.id) {
    case 'login':
      submitLogin(e.target);
      break;
    case 'registration':
      submitRegister(e.target);
      break;
    case 'addProduct':
      submitProduct(e.target);
      break;
    default:
      break;
  }
});

body.addEventListener('click', (e) => {
  if (e.target.type === 'button' && !e.target.dataset.type) {
    // Ловим кнопки button
    switch (e.target.id) {
      case 'formRegister':
        formRegister(e.target);
        break;
      case 'formLogin':
        formLogin(e.target);
        break;
      case 'logOut':
        logOut(e.target);
        break;
      case 'createProduct':
        createProduct(e.target);
        break;
      case 'courierProfile':
        courierProfile(e.target);
        break;
      case 'userProfile':
        userProfile(e.target);
        break;
      default:
        break;
    }
  } else if (e.target.type === 'button' && e.target.dataset.type) {
    // Ловим кнопки button с data-type
    switch (e.target.dataset.type) {
      case 'buy':
        buyProduct(e.target);
        break;
      case 'close':
        courierOrderClose(e.target);
        break;
      default:
        break;
    }
  }
});
