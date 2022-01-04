import React from 'react';
import {deleteProduct} from "../../store/slices/productsSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import Button from "../Button/Button";

const DeleteProduct = ({id, isGoHome, text, icon}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const removeProduct = (e) => {
    e.preventDefault()

    const areYouSure = window.confirm('Вы действительно хотите удалить продукт?')

    if (areYouSure) {
      dispatch(deleteProduct(id))
      isGoHome && navigate('/products')
    }
  }

  const btnText = (text || (!text && !icon)) ? 'Удалить продукт' : null

  return (
    <Button
      text={btnText}
      onCLick={removeProduct}
      isError={true}
      icon={icon}
    />
  );
};

export default DeleteProduct;