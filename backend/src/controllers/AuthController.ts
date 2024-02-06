import {Response,Request} from 'express';
const User = require('../models/User');
const mongoose = require("mongoose");
import { AuthIneractor } from '../interactors/AuthInteractor'; 

export const AuthController = {
     login: async (req:Request,res:Response) =>{
          let user = await AuthIneractor.userLogin(req.body)
          if (user) {
               return res.status(200).json(user);
          } else {
               return res.status(401).json({message: "Invalid credentials"});
          }
     }
}
