import { generateToken, hashPassword, comparePassword } from "../helpers/auth";

const { User } = require("../models");
export const AuthPersistence = {
  loginUser: async (data: any) => {
    let rdata: any = {};
    let userData = await User.findOne({ where: { email: data.email } });
   
    if(!userData){
      rdata['message'] = "No user found!";
      rdata['status'] = '404';
      rdata['data'] = null
      return rdata;
    }

    let user = userData.get();
    let result: any = await comparePassword(
      data.password as string,
      user.password as string
    );
    if (result != true) {
      rdata['status'] = '404';
      rdata["message"] = "password mismatch"
      rdata['data'] = null
      return rdata;
    }
    delete user.password;
    rdata['status'] = '200';
    rdata["token"] = await generateToken(user.name);
    rdata["user"] = user;
    rdata["message"] = "login successful"
    return rdata;
  },
};
