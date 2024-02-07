import {Response, Request, NextFunction} from "express";

const {CategoryInteractor} = require('../interactors/CategoryInteractor');
import {create,search} from "../persistences/CategoryPersistence";

export const CategoryController = {
     getAll: async (req: Request, res: Response) => {
          
     },
     getOne: async (req: Request, res: Response) => {
          let id : any  =  req.query.category_id ;
          let category = await CategoryInteractor.findOne(search,id);
          if (category) {
               return res.status(200).json({data: category});

          } else {
               return res.status(401).json({message: "Invalid credentials"});
          }
     },
     add: async (req: Request, res: Response) => {
         let category =  await CategoryInteractor.createCategory(create,req.body);
         if (category) {
             return res.status(200).json({data: category});
         } else {
             return res.status(401).json({message: "Invalid credentials"});
         }
     },
     update: async (req: Request, res: Response) => {

     },
     delete: async (req: Request, res: Response) => {

     },
}


