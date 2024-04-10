import { Request,Response } from "express"
import { AuthService } from "../services/auth/AuthService"

export const AuthController = () => {
  let auth =  AuthService();
  const loginUser = async (req:Request , res:Response) => {
    let {email , role , password} = req.body;
    let response = await  auth.login(email , role , password)
    res.json(response)
  }

  const registerUser = async (req:Request , res:Response) => {
    const data: any = req.body;
    auth.register(data)
  }
  return {
    loginUser,
    registerUser
  }
}