const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// const User = require('../models/user');

router.get('/', authController.checkLogIn ,userController.main);

router.get('/login', userController.loginForm);
router.post('/login', authController.login);

router.get('/register', userController.registerForm);
router.post('/register', userController.register, authController.login);

router.get('/logout', authController.logout);

module.exports = router;
