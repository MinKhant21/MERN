import {Response, Request, NextFunction} from "express";

const {CategoryInteractor} = require('../interactors/CategoryInteractor');
import {create,search,getList,del,update} from "../persistences/CategoryPersistence";

export const CategoryController = {
     getAll: async (req: Request, res: Response) => {
          let categories = await CategoryInteractor.findAll(getList)
          if (categories) {
            return res.status(200).json({message:"Category List",data: categories});
          } else {
            return res.status(404).json({message: "No categories found"});
          }
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
          let id : any  =  req.query.category_id ;

         let result = await CategoryInteractor.updateCategory(update,id,req.body);
         if(result == 1) {
           return res.status(200).json({message: "Successfully Updated category"});
         } else {
           return res.status(401).json({message: "Invalid credentials"});
         }
     },
     delete: async (req: Request, res: Response) => {
          let id : any  =  req.query.category_id ;

          let category =  await CategoryInteractor.delCategory(del,id);
          if (category == 1) {
              return res.status(200).json({message: "Successfully deleted"});
          } else {
              return res.status(401).json({message: "Invalid credentials"});
          }
     },
}


