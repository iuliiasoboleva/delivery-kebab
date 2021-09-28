const { Products } = require('../../models/init');

const productBuyOut = (req, res) => {
  // Выкуп товара
  const userId = req.session.userId;
  console.log(userId);
  const itemId = req.params.id;
  Products.update(
    { buyerId: userId, status: 'pending' },
    { where: { id: itemId } },
  ).then(() => {
    res.json({ message: 'Товар куплен', error: false });
  });
};

module.exports = productBuyOut;
