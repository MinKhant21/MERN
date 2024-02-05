import reqBodyResg from "../entities/reqBodyResg";
const User = require("../models/user");
const mongoose = require("mongoose");

export const create = async ({ name, email, password }: reqBodyResg) => {
  try {
    let ifExit = await User.findOne({ email: email });
    if (ifExit) {
      return null;
    }
    const user = await User.create({ name, email, password });
    return user;
  } catch (err) {
    console.error(err);
    return err;
  }
};
