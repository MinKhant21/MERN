import reqBodyResg from "../entities/reqBodyResg";

export const UserInteractor = {
  createUser: async (
    create: Function,
    { name, email, password }: reqBodyResg
  ) => {
    try {
      let user = await create({ name, email, password });
      if (user) {
        return user;
      } else {
        return null;
      }
    } catch (error) {}
  },
};
