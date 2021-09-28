const { Products } = require('../../models/init');

const productDelete = (req, res) => {
  // Удаление товара
  const itemId = req.params.id;
  Products.update({ status: 'close' }, { where: { id: itemId } }).then(() => {
    res.json({ message: 'Товар удален', error: false });
  });
};

module.exports = productDelete;
