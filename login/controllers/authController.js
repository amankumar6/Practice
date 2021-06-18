const passport = require('passport');

exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/',
});

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/login');
};

exports.checkLogIn = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
};
