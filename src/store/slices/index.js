import {combineReducers} from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import productsParamsSlice from "./productsParamsSlice";

const rootReducer = combineReducers({
  products: productsSlice,
  productsParams: productsParamsSlice,
})

export default rootReducer