
const {Category} = require('../models')

export const create = async ( name : string) => {
  try {
    let rdata :any = {}
    let ifExit = await Category.findOne({where:{ name: name }});
    if (ifExit) {
      rdata['status'] = "401",
      rdata['message'] = "Already Exit"
      return rdata
    }
    const category = await Category.create({name:name});
    if(category){
      rdata['status'] = "200",
      rdata['message'] = "Category Created"
      return rdata
    }
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


export const getList = async () => {
  try {
    let category = await Category.findAll();
    if (category) {
      return category;
    }
    return null;
  } catch (err) {
    console.error(err,'hit');
    return err;
  }
};
export const del = async ( id : string) => {
  try {
    let category = await Category.destroy({where:{ category_id: id }});
    if (category) {
      return category;
    }
    return null;
  } catch (err) {
    console.error(err,'hit');
    return err;
  }

};

export const update = async ( id : string,data : any) => {
  try {
    let category = await Category.update(data,{where:{ category_id: id }});
    if (category) {
      return category;
    }
    return null;
  } catch (err) {
    console.error(err,'hit');
    return err;
  }
};

