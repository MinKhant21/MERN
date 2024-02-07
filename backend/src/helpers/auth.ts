const bcrypt = require('bcrypt')
const dotenv  = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config();

const  bcryptFormat = process.env.BCRYPT_ROUND
export const hashPassword = async (password: string): Promise<string> => {
     try {
         const hashedPassword = await bcrypt.hash(password, 12); // 12 is the number of salt rounds
         return hashedPassword;
     } catch (error) {
         throw new Error('Error hashing password');
     }
 }
 
 export const comparePassword = async (password: string, hashPassword: string): Promise<boolean> => {
     try {
         const isMatch = await bcrypt.compare(password, hashPassword);
         return isMatch;
     } catch (error) {
         throw new Error('Error comparing passwords');
     }
 }

export const generateToken = (name:string) => {
     return jwt.sign(name,process.env.TOKEN_SECRET_KEY)
}