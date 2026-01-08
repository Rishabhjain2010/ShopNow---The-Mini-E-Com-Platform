const UserRepo = require('../repositories/user.repository');
const { hashPassword } = require('../utils/password.util');
const { comparePassword } = require('../utils/password.util');
const OTPService = require('./otp.service');
const UserRepo = require('../repositories/user.repository');


async function register({ email, mobile, password }) {
  if (!email && !mobile) {
    throw new Error('Email or mobile is required');
  }

  if (email) {
    const existingEmail = await UserRepo.findByEmail(email);
    if (existingEmail) throw new Error('Email already registered');
  }

  if (mobile) {
    const existingMobile = await UserRepo.findByMobile(mobile);
    if (existingMobile) throw new Error('Mobile already registered');
  }

  const passwordHash = await hashPassword(password);

  const user = await UserRepo.createUser({
    email,
    mobile,
    passwordHash
  });

  return user;
}

async function login({ email, mobile, password }) {
    if ((!email && !mobile) || !password) {
        throw new Error('Email or mobile and password are required');
}

let user;
if (email) {
    user = await UserRepo.findByEmail(email);
} else {
    user = await UserRepo.findByMobile(mobile);
}

if(!user) {
    throw new Error('User not found');
}

if(!user.is_verified) {
    throw new Error('User is not verified');
}

const passwordMatch = await comparePassword(password, user.password_hash);
if(!passwordMatch) {
    throw new Error('Invalid password');
}

const token = generateToken({
    userId: user.id,
    email: user.email
  });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      mobile: user.mobile
    } 
};
}

async function sendOTP(email, mobile) {
    return OTPService.sendOTP(email, mobile);
}

async function verifyOTP(email, mobile, otp) {
    await OTPService.verifyOTP(email, mobile, otp);

    if (email) {
        await UserRepo.markuserverifiedbyEmail(email);
    } else if (mobile) {
        await UserRepo.markuserverifiedbyMobile(mobile);
    }

    return { message: 'User verified successfully' };
}

module.exports = {
  register , login , sendOTP , verifyOTP
}; 
