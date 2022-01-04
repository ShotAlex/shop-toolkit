import React from 'react';
import cl from './Button.module.scss'
import deleteIcon from '../../assets/images/delete.svg'
import editIcon from '../../assets/images/edit.svg'

const Button = ({onCLick, text, icon, isError, disabled}) => {
  const icon_pack = {
    'delete': deleteIcon,
    'edit': editIcon,
  }

  const icon_img = icon_pack[icon]
    ? <img src={icon_pack[icon] } alt={''} className={cl.icon}/>
    : null

  const style = [
    cl.button,
    isError && cl.error,
  ].filter(el => el).join(' ')

  return (
    <button className={style} onClick={onCLick} disabled={disabled}>
      {icon_img}
      {text
        ? <span className={cl.text}>{text}</span>
        : null
      }
    </button>
  );
};

export default Button;