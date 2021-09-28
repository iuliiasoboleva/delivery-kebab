const indexLoginForm = (req, res) => {
  // Форма входа
  res.render('loginForm', { layout: false });
};

module.exports = indexLoginForm;
