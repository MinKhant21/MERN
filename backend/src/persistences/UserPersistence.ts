import reqBodyResg from "../entities/reqBodyResg";
import { hashPassword } from "../helpers/auth";
const {User} = require('../models')

export const create = async ({ name, email, password }: reqBodyResg) => {
  try {
    let ifExit = await User.findOne({where:{ email: email }});
    if (ifExit) {
      return null;
    }
    const user = await User.create({ name, email, password:await hashPassword(password) });
    return user;
  } catch (err) {
    console.error(err);
    return err;
  }
};
