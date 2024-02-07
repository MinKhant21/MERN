import reqBodyResg from "../entities/reqBodyResg";
import { hashPassword } from "../helpers/auth";
const {Category} = require('../models')

export const create = async ( name : string) => {
  try {
    let ifExit = await Category.findOne({where:{ name: name }});
    if (ifExit) {
      return null;
    }
    const category = await Category.create({name:name});
    return category;
  } catch (err) {
    console.error(err,'hit');
    return err;
  }
};


export const search = async ( id : string) => {
  try {
    let category = await Category.findOne({where:{ category_id: id }});
    if (category) {
      return category.get();
    }
    return null;
  } catch (err) {
    console.error(err,'hit');
    return err;
  }
};
