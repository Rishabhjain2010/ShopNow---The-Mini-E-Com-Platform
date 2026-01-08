const { generateOTP , resolveIdentifier } = require('../utils/otp.util');
const OTPStore = require('../stores/otp.store');
const EmailProvider = require('../providers/email.provider');
const SMSProvider = require('../providers/sms.provider');

async function sendOTP(email, mobile) {
    const identifier = resolveIdentifier(email, mobile);
    const otp = generateOTP();

    await OTPStore.storeOTP(identifier, otp);
    

    if  (email)  {
        await EmailProvider.sendOTP(email, otp);
    } else if (mobile) {
        await SMSProvider.sendOTP(mobile, otp);
    }

    return { message: 'OTP sent successfully' };
}

async function verifyOTP(email , mobile, otpInput) {

const identifier = resolveIdentifier(email, mobile); 
const storedOTP = await OTPStore.getOTP(identifier);

if (!storedOTP) {
    throw new Error('OTP expired or not found');
}

if (storedOTP !== otpInput) {
    throw new Error('Invalid OTP'); }

    await OTPStore.deleteOTP(identifier);
    
    return { message: 'OTP verified successfully' }; 

}

module.exports = {
    sendOTP,
    verifyOTP
};