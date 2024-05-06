// import { ProductRepository } from "../../repository/ProductRepository";

// export const ProductService = () => {
//   const productRepo = ProductRepository();

//   const addProduct = async (data: any) => {
//     let isExit: any = await productRepo.findById(data.name);
//     if (isExit) {
//       return {
//           status : "500",
//           message : "Product Already Exit"
//       };
//       // throw new Error("Product Already Exit");
//     }
//     let response = await productRepo.create(data);
//     return response;
//   };

//   const getOne = async (name:string) => {
//     let product =  await productRepo.findById(name)
//     if(product){
//       return product;
//     }else{
//       return null;
//     }
//   }
//   return {
//     addProduct,
//     getOne
//   };
// };
