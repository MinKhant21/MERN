const { Product } = require("../models");
export const store = async (data: any) => {
  return await Product.create(data);
};
