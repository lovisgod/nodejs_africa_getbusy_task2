const home = (req, res) => {
  res.status(200).render('home', {'message': 'Welcome to Nodejs_Africa_getbusy_programme'});
};

module.exports = { home };
