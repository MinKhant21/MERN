import { AuthRepository } from "../../repository/AuthRepository"

export const AuthService = () => {

     let authRepo = AuthRepository();
     const  login = async (email : string, role : string, password : string)  => {
         return  authRepo.login(email,role,password)
     }
     const register = async (data:any) => {
          return  authRepo.register(data)
     }
     return {
          login,
          register
     }
}