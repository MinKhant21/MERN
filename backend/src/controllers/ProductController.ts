import {Request, Response} from "express";

// import { ProductInteractor } from "../interactors/ProductInteractor";
// import { store } from "../persistences/ProductPersistence";
export const ProductController = {
     addItem : async (req:Request, res:Response) => {
          console.log(req.body);
     }    
};
