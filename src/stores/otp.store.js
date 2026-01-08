const redis = require('../config/redis.config');
const { registerUser } = require('../models/user.model');

const OTP_TTL = 3*60; // 3 minutes in seconds

async function saveOTP(identifier, otp) {
    await redis.setex(`otp:${identifier}`, OTP_TTL, otp);
}

async function getOTP(identifier) {
    return redis.get(`otp:${identifier}`);

}

async function deleteOTP(identifier) {
    return redis.del(`otp:${identifier}`);
}

module.exports = {
    saveOTP , getOTP , deleteOTP
}
