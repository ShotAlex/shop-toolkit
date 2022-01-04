import React from 'react';
import {Outlet} from 'react-router-dom';
import cl from './Layout.module.scss';
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />

      <main className={cl.content}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;