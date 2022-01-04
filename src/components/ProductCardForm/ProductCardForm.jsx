import React, {useEffect, useState} from 'react';
import cl from './ProductCardForm.module.scss';
import Button from "../Button/Button";
import noImg from '../../assets/images/no-image.jpg';
import {productTemplate} from "../../utils/productTemplate";


const ProductCardForm = ({productData, onClick, buttonText = 'Отправить'}) => {
  const [product, setProduct] = useState(productData || productTemplate)
  const [error, setError] = useState({title: '', description: ''})

  const checkErrors = (field, value) => {
    // TODO: include Yup and formik
    if (typeof (value) === "string") {
      const min_value = 8

      value.length < min_value
        ? setError(prev => ({
          ...prev,
          [field]: `${field}: должно быть больше ${min_value} символов`
        }))
        : error[field] && setError(prev => ({
        ...prev,
        [field]: ''
      }))
      return null;
    }
  }

  const changeField = (field, value) => {
    setProduct(prev => ({...prev, [field]: value}))
    checkErrors(field, value)
  }

  const submit = (e) => {
    e.preventDefault()
    onClick(product)
  }

  const changeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      changeField('image', URL.createObjectURL(img))
    }
  }

  useEffect(() => {
    // TODO: include Yup and delete that
    checkErrors('title', product.title)
    checkErrors('description', product.description)
  }, [])

  return (
    <form className={cl.form}>
      <div className={cl.image_wrapper}>
        <img src={product.image || noImg} alt={product.title} className={cl.image}/>
        <input type="file" accept="image/png, image/jpeg" onChange={e => changeImage(e)}/>
      </div>

      <label htmlFor="title" className={cl.label}>Название</label>
      <input
        type="text"
        value={product.title}
        placeholder="Название"
        className={cl.field}
        id="title"
        onChange={(e) => changeField('title', e.target.value)}
        required={true}
      />
      <span className={cl.error}> {error.title} </span>

      <label htmlFor="price" className={cl.label}>Цена</label>
      <input type="number" min="0" value={product.price} placeholder="Цена" className={cl.field} id="price"
             onChange={(e) => changeField('price', +e.target.value)}/>

      <label htmlFor="description" className={cl.label}>Описание</label>
      <textarea
        id="description"
        rows="10"
        value={product.description}
        placeholder="Описание"
        className={cl.field}
        onChange={(e) => changeField('description', e.target.value)}
      />

      <label htmlFor="published" className={cl.label}>
        <input type="checkbox" id="published" checked={product.published}
               onChange={(e) => changeField('published', e.target.checked)}/>
        <span>Опубликован</span>
      </label>

      <span className={cl.error}> {error.description} </span>

      <Button text={buttonText} onCLick={submit} disabled={error.title || error.description}/>
    </form>
  );
};

export default ProductCardForm;