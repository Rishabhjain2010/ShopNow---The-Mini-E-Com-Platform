const { verify } = require('jsonwebtoken');
const pool = require('../db');
const bcrypt = require('bcrypt');
const { verifyOTP } = require('../utils/otpUtil');

//  User Model
//  Description: Handles user-related database operations and fields. 
//  Params: username(*), email(*), mobile(*) , password(*) , firstName(*), lastName
//  Returns: newly created user object or error


const registerUser = async ( username , emailID , mobileNumber , password , firstName , lastName   ) => {
    const result = await pool.query( ' INSERT INTO users ( username , emailID , mobileNumber , password , firstName , lastName , created_at ) VALUES ($1 , $2 , $3 , $4 , $5 , $6 , NOW() ) RETURNING id, username ,  updated_at ' , [ username , emailID , mobileNumber , password , firstName , lastName ] ) ;
    return result.rows[0];  
}

const checkUsernameExists = async (username) => {
    const result = await pool.query(' SELECT id FROM users WHERE username = $1 ', [usernmame]);
    return result.rows.lenght > 0;
}

const checkEmailorMobileExists = async (emailID , mobileNumber ) => {
    const result = await pool.query('SELECT is FROM users WHERE emailID = $1 OR mobileNumber = $2 ' , [emailID , mobileNumber ]);
    return result.rows.length > 0 ;
} 

module.exports = {
    registerUser , checkEmailorMobileExists , checkUsernameExists
};



// async function registerUser( username , emailID , mobileNumber , password , firstName , lastName   ) {

//     const hashedPassword = await bcrypt.hash(password,16);

//     try {
//         const identifier = emailID ? emailID : mobileNumber ;
//     if (!identifier) {
//         throw new Error('Either emailID or mobileNumber must be provided for OTP verification.');
//     }
//     const verifiedOTP = verifyOTP ( identifier , emailID ? 'emailID' : 'mobileNumber' ) ;
//     if (!verifiedOTP) {
//         throw new Error('OTP verification Failed !');
//     }
        
//     const registerUserQuery = ` INSERT INTO users
//             ( username , emailID , mobileNumber , firstName , lastName , password , created_at)
//             values ( $1 , $2 ,$3 ,$4 ,$5 ,$6 , NOW() )
//                 RETURNING id, username ,  updated_at ` ;

//     const values = [ username , emailID , mobileNumber , firstName , lastName , hashedPassword , created_at]  ;

//     const result = await pool.query( registerUserQuery , values ) ;
//     return result.rows[0]; 
//     }
//     catch (error) {
//         throw new Error(`User Registration Failed: ${error.message}`);
//     }}

    



        
