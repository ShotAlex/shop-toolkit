import React from 'react';
import cl from './ProductCard.module.scss'
import {NavLink, useNavigate} from "react-router-dom";
import noImg from '../../assets/images/no-image.jpg'
import Button from "../Button/Button";
import DeleteProduct from "../DeleteProduct/DeleteProduct";


const ProductCard = ({product}) => {
  const unit = product.unit || '$'

  const navigate = useNavigate()

  const goEdit = (e) => {
    e.preventDefault()
    navigate(`/edit-product/${product.id}`)
  }

  return (
    <NavLink className={cl.wrapper} to={`/products/${product.id}`}>
      <div className={cl.image_wrapper}>
        <img src={product.image || noImg} alt={product.title} className={cl.image}/>
      </div>
      <span className={cl.title}>{product.title}</span>
      <span className={cl.price}>{unit} {(+product.price).toFixed(2)}</span>

      <div className={cl.buttons_group}>
        <Button onCLick={goEdit} icon='edit'/>
        <DeleteProduct id={product.id} icon='delete'/>
      </div>
    </NavLink>
  );
};

export default ProductCard;