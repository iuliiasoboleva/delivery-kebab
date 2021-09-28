const { Products } = require('../../models/init');
// Заведение товара в базу данных
const productCreate = (req, res) => {
  if (!req.files) {
    console.log(req.body);
    const { name, price, coords, address, discount } = req.body;
    const { userId } = req.session;
    Products.create({ name, price, discount, coords, address, userId }).then(
      (data) => {
        req.session.postId = data.id;
        res.json({ message: data.id, error: false });
      },
    );
  } else {
    const { postId } = req.session;
    const image = req.files.file;
    const imageName = image.name.replace(/.{1,}/, `img_${postId}.jpg`);
    image.mv('./public/src/images/' + imageName);
    res.json({ message: 'Товар создан', error: false });
  }
};

module.exports = productCreate;
