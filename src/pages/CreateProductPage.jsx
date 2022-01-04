import React, {useState} from 'react';
import TitlePage from "../components/TitlePage/TitlePage";
import {useDispatch} from "react-redux";
import {productTemplate} from "../utils/productTemplate";
import {createProduct} from "../store/slices/productsSlice";
import ProductCardForm from "../components/ProductCardForm/ProductCardForm";
import Seo from "../components/Seo/Seo";

const CreateProductPage = () => {
  const dispatch = useDispatch()

  const addProduct = (product) => {
    dispatch(createProduct(product))
    window.alert('Продукт сохранён!') // по-нормлаьному - должна быть всплывашка
  }

  return (
    <>
      <Seo title='Создание продукта' />
      <TitlePage title='Создание продукта'/>

      <ProductCardForm
        productData={productTemplate}
        onClick={addProduct}
        buttonText='Создать продукт'
      />

    </>
  );
};

export default CreateProductPage;