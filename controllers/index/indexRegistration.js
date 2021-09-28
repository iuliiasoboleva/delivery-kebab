const bcrypt = require('bcrypt');
const { Users } = require('../../models/init');

const indexRegistration = (req, res) => {
  // Регистрация нового пользователя
  console.log(req.body);
  const { username, phone, password, role, address, coords } = req.body;
  bcrypt.hash(password, +process.env.SALT_ROUNDS).then((hash) => {
    Users.create({ username, phone, password: hash, role, address, coords })
      .then((db) => {
        req.session.userId = db.id;
        req.session.isAutorize = true;
        req.session.username = username;
        req.session.coords = coords;
        req.session.phone = db.phone;
        if (role === '1') {
          req.session.roleUser = true;
        } else {
          req.session.roleCourier = true;
        }
        res.json({
          message: `Пользователь ${username} успешно зарегистрировался`,
          error: false,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          message: `Ошибка. Пользователь с таким именем (${username}) уже зарегистрирован`,
          error: true,
        });
      });
  });
};

module.exports = indexRegistration;
