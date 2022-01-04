import store from "../store";

export const getChooseProduct = (id) => store.getState().products.data.find(product => +product.id === +id)