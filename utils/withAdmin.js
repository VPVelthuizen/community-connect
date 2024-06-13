const withAdmin = (req, res, next) => {
    if (!req.session.is_admin) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAdmin;