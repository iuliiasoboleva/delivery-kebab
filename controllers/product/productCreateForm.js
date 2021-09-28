const productCreateForm = (req, res) => {
  // Форма добавления товара
  res.render('productCreateForm', { layout: false });
};

module.exports = productCreateForm;
