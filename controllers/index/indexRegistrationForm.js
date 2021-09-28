const indexRegistrationForm = (req, res) => {
  // Форма регистрации
  res.render('registerForm', { layout: false });
};

module.exports = indexRegistrationForm;
