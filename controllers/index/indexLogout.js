const indexLogout = (req, res) => {
  req.session.destroy();
  res.clearCookie('uSID');
  res.json({ message: 'logout' });
};

module.exports = indexLogout;
