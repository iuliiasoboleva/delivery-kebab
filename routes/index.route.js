// Главная страница
const route = require('express').Router();
const init = require('../controllers/index/index.init');

route.get('/', init.indexRender);
route.get('/registration', init.indexRegistrationForm);
route.post('/registration', init.indexRegistration);
route.get('/login', init.indexLoginForm);
route.post('/login', init.indexLogin);
route.get('/logout', init.indexLogout);

route.get('/courier', init.indexCourier);
route.get('/courier/profile', init.profileCourier);
route.get('/profile', init.profileUser);

module.exports = route;
