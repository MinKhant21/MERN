export const CategoryInteractor = {
  createCategory: async (create: Function, data: any) => {
    try {
      let category = await create(data.name);
      if (category) {
        return category;
      } else {
        return null;
      }
    } catch (error) {}
  },
  findOne: async (search: Function, id: string) => {
    let category = await search(id);
    if (category) {
      return category;
    } else {
      return null;
    }
  },
  findAll: async (getList: Function) => {
    let categories = await getList();
    if (categories) {
      return categories;
    } else {
      return null;
    }
  },
  delCategory: async (del: Function, id: string) => {
    let category = await del(id);
    if (category) {
      return category;
    } else {
      return null;
    }
  },
};
