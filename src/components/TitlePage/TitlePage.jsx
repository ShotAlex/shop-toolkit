import React from 'react';
import cl from './TitlePage.module.scss'

const TitlePage = ({title}) => {
  return (
    <h1 className={cl.title}>
      {title}
    </h1>
  );
};

export default TitlePage;