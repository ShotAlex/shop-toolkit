import React from 'react';
import cl from './ProductsList.module.scss';
import ProductCard from "../ProductCard/ProductCard";


const ProductsList = ({data}) => {
  return (
    <>
      {data.length
        ? (
          <ul className={cl.wrapper}>
            {
              data.length && data.map((product) => {
                return (
                  <li key={`${product.id}`} className={cl.item}>
                    <ProductCard product={product}/>
                  </li>
                )
              })
            }
          </ul>
        ) : null
      }

      {
        (data.length === 0 || !data)
          ? <h2 className={cl.empty}>Список пуст...</h2>
          : null
      }
    </>


  );
};

export default ProductsList;