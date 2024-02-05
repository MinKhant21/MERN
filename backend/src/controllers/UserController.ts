import { UserInteractor } from "../interactors/UserInteractor";
import { create } from "../persistences/UserPersistence";
import reqBodyResg from "../entities/reqBodyResg";
import { Response } from "express";
import { ResponseMessage } from "../helpers/ResponseMessage";
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
        ResponseMessage(res, 200, "User created successfully", user);
      } else {
        ResponseMessage(res, 400, "User not created");
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
