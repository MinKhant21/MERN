import { Request, Response } from "express";
import { create } from "../persistences/CategoryPersistence";
class CategoryController {
  constructor() {}

  async store(req: Request, res: Response) {
    let {name} = req.body
    let data =  await create(name);
    return res.json(data);
  }
}

export default CategoryController;
