import {Response,Request} from 'express';
const User = require('../models/User');
const mongoose = require("mongoose");

export const AuthController = {
     login: async (req:Request,res:Response) =>{
          // const {email,password} : any = req.body;
          // const user = await User.findOne({email});
          // if(user){
          //     if(user.password === password){
          //         res.status(200).json({
          //             success: true,
          //             message: "Login successful",
          //             user: user
          //         })
          //     }else{
          //         res.status(401).json({
          //             success: false,
          //             message: "Invalid password"
          //         })
          //     }
          // }else{
          //     res.status(401).json({
          //         success: false,
          //         message: "Invalid email"
          //     })
          // }
 
     }
}
