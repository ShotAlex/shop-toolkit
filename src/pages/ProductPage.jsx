import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import TitlePage from "../components/TitlePage/TitlePage";
import cl from '../styles/ProductPage.module.scss'
import {getChooseProduct} from "../utils/getChooseProduct";
import noImg from '../assets/images/no-image.jpg'
import Button from "../components/Button/Button";
import Seo from "../components/Seo/Seo";

const ProductPage = () => {
  const {id} = useParams()
  const product = getChooseProduct(+id)
  const navigate = useNavigate()

  const create_date = new Date(+product.createAt).toLocaleString() || '-'

  return (
    <div className={cl.wrapper}>
      <Seo title={product.title} />
      <TitlePage title={`Карточка продукта: ${product.title}`} />

      <Button text='Редактировать' onCLick={() => navigate(`/edit-product/${id}`)} />

      <div className={cl.content}>
        <img src={product.image || noImg} alt={product.title} className={cl.image} />
        <p>Название: {product.title}</p>
        <p>Цена: {product.price}</p>
        <p>Опубликован: {product.published ? 'Да' : 'Нет'}</p>
        <p>Дата создания: {create_date}</p>
        <p>Описание: {product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;