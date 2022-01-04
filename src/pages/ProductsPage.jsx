import React from 'react';
import TotalCardsPerPage from "../components/TotalCardsPerPage/TotalCardsPerPage";
import TitlePage from "../components/TitlePage/TitlePage";
import Seo from "../components/Seo/Seo";
import ProductsWrapper from "../components/PtoductsWrapper/ProductsWrapper";


const ProductsPage = () => {
  return (
    <>
      <Seo title='Продукты' />
      <TitlePage title='Продукты' />
      <TotalCardsPerPage />
      <ProductsWrapper />
    </>
  );
};

export default ProductsPage;