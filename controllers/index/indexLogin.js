const bcrypt = require('bcrypt');
const { Users } = require('../../models/init');

const indexLogin = (req, res) => {
  // Авторизация пользователя
  const { username, password } = req.body;
  Users.findOne({ where: { username }, raw: true }).then((db) => {
    if (db) {
      bcrypt.compare(password, db.password).then((check) => {
        if (check) {
          req.session.userId = db.id;
          req.session.isAutorize = true;
          req.session.username = db.username;
          req.session.coords = db.coords;
          req.session.phone = db.phone;
          if (db.role === 1) {
            req.session.roleUser = true;
          } else {
            req.session.roleCourier = true;
          }
          res.json({ message: 'Успешный вход.', error: false });
        } else {
          res.json({ message: 'Неверный пароль.', error: true });
        }
      });
    } else {
      res.json({
        message: `Пользователя ${username} не существует.`,
        error: true,
      });
    }
  });
};

module.exports = indexLogin;
