import React from 'react';
import cl from './TotalCardsPerPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {changeCardsPerPage} from "../../store/slices/productsParamsSlice";
import Button from "../Button/Button";
import {buttonsPerPage} from "../../utils/buttonsPerPage";


const TotalCardsPerPage = () => {
  const dispatch = useDispatch()
  const {cardsPerPage} = useSelector(state => state.productsParams)

  const handlerChange = (num) => {
    dispatch(changeCardsPerPage(num))
  }

  return (
    <div className={cl.wrapper}>
      <span className={cl.text}>
        Количество продуктов на странице
      </span>

      <div className={cl.buttons}>
        {buttonsPerPage.map(btn => {
          const isActive = btn.value === cardsPerPage

          return (
            <Button
              key={btn.title}
              text={btn.title}
              onCLick={() => handlerChange(btn.value)}
              disabled={isActive}
            />
          )
        })}
      </div>
    </div>
  );
};

export default TotalCardsPerPage;