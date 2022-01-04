import axios from "axios";
import {BASE_URL_API} from "../constants";

export const getAllProductsApi = async () => {
  return await axios.get(BASE_URL_API)
}

export const updateProductApi = async (id, data) => {
  return await axios.put(`${BASE_URL_API}/${id}`, data)
}

export const createProductApi = async (data) => {
  return await axios.post(BASE_URL_API, data)
}

export const deleteProductApi = async (id) => {
  return await axios.delete(`${BASE_URL_API}/${id}`)
}