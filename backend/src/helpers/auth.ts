const bcrypt = require('bcrypt')
const dotenv  = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config();

const  bcryptFormat = process.env.BCRYPT_ROUND

export const hashPassword = (password:string)  => {
     return bcrypt.hash(password,1*12)
}

export const comparePassword = (password:string) => {
     return bcrypt.compare(password,1*12)
}

export const generateToken = (name:string) => {
     return jwt.sign(name,process.env.TOKEN_SECRET_KEY)
}