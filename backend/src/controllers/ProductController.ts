// import { Request, response, Response } from "express"
// import { ProductService } from "../services/product/ProductService"

// export const ProductController = () => {
//      let productService = ProductService();

//      const create = (req:Request , res: Response) => {
//           let data = req.body
//           productService.addProduct(data).then(response => {
             
//               if(response.status == '500'){
//                res.status(500).json(response)
//               }else {
//                res.status(200).json(response)
//               }
//           }).catch(e=>{
//                throw new Error(`Error : ${e.message}`)
//           })
          
//      }

//      const getByOne = (req:Request , res: Response) => {
//           let {name : string }  = req.params  ;
//           productService.getOne(name).then((response:any)=>{
//                res.json(response)
//           })
//      }

//      return {
//           create,
//           getByOne
//      }
// }