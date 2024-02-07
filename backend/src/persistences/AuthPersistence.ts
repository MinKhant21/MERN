import { generateToken, hashPassword, comparePassword } from "../helpers/auth";

const { User } = require("../models");
export const AuthPersistence = {
  loginUser: async (data: any) => {
    let rdata: any = {};
    let userData = await User.findOne({ where: { email: data.email } });
    let user = userData.get();
    if (!user) {
      return null;
    }
    let result: any = await comparePassword(
      data.password as string,
      user.password as string
    );
    if (result != true) {
      return (rdata["message"] = "password mismatch");
    }
    delete user.password;
    rdata["token"] = await generateToken(user.name);
    rdata["user"] = user;
    return rdata;
  },
};
