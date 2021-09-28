const profileUser = (req, res) => {
  // Профиль юзера
  res.render('profileUser', { layout: false });
};

module.exports = profileUser;
