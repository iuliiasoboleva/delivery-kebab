const { Products, Users } = require('../../models/init');

const profileCourier = (req, res) => {
  // Профиль курьера
  const userId = req.session.userId;
  Products.findAll({
    where: { userId },
    raw: true,
    include: [
      {
        model: Users,
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt', 'password', 'role'],
        },
      },
    ],
  }).then((db) => {
    const activeOrders = [];
    const buyOutOrders = [];
    db.forEach((item) => {
      if (item.status === 'new') {
        activeOrders.push(item);
      } else if (item.status === 'pending') {
        buyOutOrders.push(item);
      }
    });
    res.render('profileCourier', { activeOrders, buyOutOrders, layout: false });
  });
};

module.exports = profileCourier;
