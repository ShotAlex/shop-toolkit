import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCardsPerPage} from "../../store/slices/productsParamsSlice";
import {buttonsPerPage} from "../../utils/buttonsPerPage";
import Button from "../Button/Button";
import cl from './TotalCardsPerPage.module.scss'


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