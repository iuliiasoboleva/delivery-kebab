// Личный кабинет
const route = require('express').Router();
const init = require('../controllers/cabinet/cabinet.init');

route.get('/', init.cabinetUserForm);
route.post('/', init.cabinetUserEdit);
route.get('/orders', init.cabinetCourierOrders);
route.post('/orders/:id', init.cabinetCourierOrderClose);

module.exports = route;
