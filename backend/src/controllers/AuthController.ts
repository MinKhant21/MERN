import {Response,Request} from 'express';
const User = require('../models/User');
const mongoose = require("mongoose");
import { AuthIneractor } from '../interactors/AuthInteractor'; 

export const AuthController = {
     login: async (req:Request,res:Response) =>{
          console.log(req.body);
          let user = await AuthIneractor.userLogin(req.body)
          console.log('first')
          console.log(user)
          console.log('asdf')
          if (user) {
               return res.json(user);
          } else {
               return res.json(user);
          }
     }
}
