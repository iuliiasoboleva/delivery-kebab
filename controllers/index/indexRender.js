const { Products } = require('../../models/init');

const indexRender = (req, res) => {
  // Главная страница
  Products.findAll({ where: { status: 'new' }, raw: true }).then((db) => {
    res.render('indexPage', { db });
  });
};

module.exports = indexRender;
