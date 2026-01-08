//  Controler to handle user registration
//  Description: Validates input, hashes password, verifies OTP, and calls the user model to register a new user.
//  Params: username(*), email(*), mobile(*) , password(*), firstName(*), lastName

const { registerUser } = require('../models/user.model');

const registerUserController = async (req, res) => {
    try {
        const { username, emailID, mobileNumber, password, firstName, lastName } = req.body;
        const user = await registerUser(username, emailID, mobileNumber, password, firstName, lastName);
        res.status(201).json({ message: 'User Registered Successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'User Registration Failed', details: error.message });
    }
    }


    export { registerUserController };