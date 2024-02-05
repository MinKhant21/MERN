import { UserInteractor } from "../interactors/UserInteractor";
import { create } from "../persistences/UserPersistence";
import reqBodyResg from "../entities/reqBodyResg";
import { Response } from "express";
export const UserController = {
  register: async (req: Request, res: Response) => {
    const { name, email, password }: reqBodyResg | any = req.body;
    try {
      let user = await UserInteractor.createUser(create, {
        name,
        email,
        password,
      });
      if (user) {
        res.status(200).json({
          status: 200,
          message: "User created successfully",
          data: user,
        });
      } else {
        res.status(400).json({
          status: 400,
          message: "User not created",
        });
      }
    } catch (error) {
      return {
        status: 500,
        message: "Internal server error",
        data: error,
      };
    }
  },
};
