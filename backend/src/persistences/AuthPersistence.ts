const { User } = require("../models");
export const AuthPersistence = {
  loginUser: async (data: any) => {
    let user = await User.findOne({ where: { email: data.email } });
    if (user) {
      if (user.password === data.password) {
        return user;
      } else {
        return null;
      }
    } else {
      return null;
    }
  },
};
