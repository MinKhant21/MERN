export const ProductInteractor = {
  add: async (store: Function, data: any) => {
    let product = await store(data);
    if (product) {
      return product;
    } else {
      return null;
    }
  },
};
