const defaultTitle = (req, res, next) => {
  res.locals.title = 'Delivery Kebab';
  next();
};

module.exports = defaultTitle;
