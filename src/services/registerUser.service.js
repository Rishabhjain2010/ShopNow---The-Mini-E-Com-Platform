const bycrpt = require("bycrypt");
const {
  registerUser,
  checkUsernameExists,
  checkEmailorMobileExists,
} = require("../models/user.model");



// Service to handle user registration logic
// Description: Validates input data, hashes password, and calls the user model to register a new user.
// Params: username(*), email(*), mobile(*) , password(*), firstName(*), lastName

const registerUserService = async (
  username,
  emailID,
  mobileNumber,
  password,
  firstName,
  lastName
) => {
  try {
    const checkusernameAvailable = await checkUsernameExists(username);
    if (checkusernameAvailable) {
      throw new Error(
        "Username already taken. Please choose a different username."
      );
    }

    const checkEmailorMobileAvailable = await checkEmailorMobileExists(
      emailID,
      mobileNumber
    );

    if (checkEmailorMobileAvailable) {
      throw new Error(
        "User already registered with EmailID or MobileNumber. Please proceed to login."
      );
    }

    const verifyemailIDorMobile = await verifyOTP(emailID, mobileNumber);
    if (!verifyemailIDorMobile) {
      throw new Error("OTP Verification Failed. Please try again.");
    }

    const totalSaltRounds = 10;
    const hashedPAssword = await bycrpt.hash(password, totalSaltRounds);

    const newUser = await registerUser(
      username,
      emailID,
      mobileNumber,
      hashedPAssword,
      firstName,
      lastName
    );
    return newUser;
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUserService };
