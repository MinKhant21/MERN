import { AuthPersistence } from "../persistences/AuthPersistence";
export const AuthIneractor = {
  userLogin: async (data: any) => {
    let user = await AuthPersistence.loginUser(data);

    if (user) {
      return user;
    } else {
      return null;
    }
  },
};
