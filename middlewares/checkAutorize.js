const checkAutorize = (req, res, next) => {
  if (req.session.isAutorize && req.session.userId) {
    res.locals.userId = req.session.userId;
    res.locals.username = req.session.username;
    res.locals.isAutorize = true;
    res.locals.coords = req.session.coords;
    res.locals.phone = req.session.phone;
    if (req.session.roleUser) {
      res.locals.roleUser = true;
    } else {
      res.locals.roleCourier = true;
    }
  }
  next();
};

module.exports = checkAutorize;
