export const ProductRepository = () => {
  const { Product } = require("../models");
  const create = async (data: any) => {
    return Product.create(data);
  };

  const findById = async (name: string) => {
    let product =  Product.findOne({ where: { name: name } });
    return product
  };

  return {
    create,
    findById,
  };
};
