const AuthService = require('../services/auth.service');

async function register(req, res, next) {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json({
      success: true,
      user
    });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
    try {
        const result = await AuthService.login(req.body);
        res.status(200).json({success: true, ...result});
    } catch (err) {
        next(err);
    }   
}

async function sendOTP(req, res, next) {
    try {
        const {email , mobile} = req.body;
        const result = await AuthService.sendOTP(email, mobile);
        res.status(200).json({ success: true, ...result });
    } catch (err) {
        next(err):
    }
}

async function verifyOTP(req, res, next) {
    try{
        const { email, mobile , otp} = req.body;
        const result = await AuthService.verifyOTP(email, mobile, otp);
        res.status(200).json({ success: true, ...result }); 
    } catch (err) {
        next(err);
    }
}


module.exports = {
  register , login , verifyOTP , sendOTP
};
