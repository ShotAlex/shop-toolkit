import React from 'react';
import cl from './Pagination.module.scss'
import Button from "../Button/Button";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";


const Pagination = ({totalListLength}) => {
  const {cardsPerPage} = useSelector(state => state.productsParams) // activeTab
  const navigate = useNavigate()
  const currentPage = +useParams().page || 1
  const totalPages = Math.ceil(totalListLength / cardsPerPage)

  if (currentPage > totalPages || currentPage < 1 || typeof (currentPage) !== 'number') {
    navigate('/products/page=1')
  }

  if (cardsPerPage >= totalListLength) {
    return null
  }

  const goToPrevPage = () => {
    navigate(`/products/page=${currentPage - 1}`)
  }

  const goToNextPage = () => {
    navigate(`/products/page=${currentPage + 1}`)
  }

  return (
    <div className={cl.wrapper}>
      <Button text='< Предыдущая' onCLick={goToPrevPage} disabled={currentPage <= 1}/>
      <span className={cl.page}>
        Страница:{' '}
        <strong>{currentPage}</strong>
      </span>
      <Button text='Следующая >' onCLick={goToNextPage} disabled={currentPage >= totalPages}/>
    </div>
  );
};

export default Pagination;