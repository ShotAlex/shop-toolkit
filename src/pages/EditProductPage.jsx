import React from 'react';
import {useParams} from "react-router-dom";
import {getChooseProduct} from "../utils/getChooseProduct";
import TitlePage from "../components/TitlePage/TitlePage";
import ProductCardForm from "../components/ProductCardForm/ProductCardForm";
import {useDispatch} from "react-redux";
import {updateProduct} from "../store/slices/productsSlice";
import Seo from "../components/Seo/Seo";
import DeleteProduct from "../components/DeleteProduct/DeleteProduct";


const EditProductPage = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const product = getChooseProduct(id)

  const saveEditProduct = async (el) => {
    console.log(el)
    dispatch(updateProduct({id, data: el}))
    window.alert('Изменения сохранены!')
    // по-нормлаьному - должна быть всплывашка
    // после того как стейт обновиться (т.е. если всё ок)
  }

  return (
    <div>
      <Seo title='Редактировать продукт'/>
      <TitlePage title='Редактировать продукт'/>

      <DeleteProduct id={id} isGoHome={true} />

      <ProductCardForm
        productData={product}
        onClick={saveEditProduct}
        buttonText='Сохранить изменения'
      />
    </div>
  );
};

export default EditProductPage;