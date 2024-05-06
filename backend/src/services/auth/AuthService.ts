const { User } = require("../../models");
import { generateToken, hashPassword, comparePassword } from "../../helpers/auth";

class AuthService {
     
     async checkUserExit (email: string){
          try {
               let user = await User.findOne({ where: { email } });
               if(user){
                    return true;
               }else{
                    return false;
               } 
          } catch (error) {
               console.log(error);
          }
     }

     async loginWithEmailAndPassword(email: string,password: string,role: string){
          try {
               const userRecord = await User.findOne({ where: { email } });
               if (!userRecord) {
                 throw new Error("No user found with this email");
               }
         
               const user = userRecord.get();
               if (user.role === role) {
                 const passwordMatch = await comparePassword(password, user.password);
                 if (!passwordMatch) {
                   throw new Error("Password does not match");
                 }
         
                 delete user.password
                 return {
                   status: 200,
                   token: await generateToken(user.name),
                   data: user,
                   message: "Login successful",
                 };
               } else {
                 return {
                   status: 403,
                   message: "You're not authorized for this role",
                 };
               }
             } catch (error) {
               console.error("Error during login:", error);
               throw error;
             }
     }
}

export default AuthService;