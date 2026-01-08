const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/otp/send', AuthController.sendOTP);
router.post('/otp/verify', AuthController.verifyOTP);

module.exports = router;
