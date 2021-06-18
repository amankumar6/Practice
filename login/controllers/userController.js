const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.main = (req, res) => {
    res.render('main', { title: 'Main' });
};

exports.loginForm = (req, res) => {
    res.render('login', { title: 'Login' });
};

exports.registerForm = (req, res) => {
    res.render('register', { title: 'Register' });
};

exports.register = async (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
    });
    const register = promisify(User.register, User);
    await register(user, req.body.password);
    next();
};
