import React from 'react';
import cl from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
  const navigation = [
    // {title: 'Главная', link: '/'},
    {title: 'Продукты', link: '/products'},
    {title: 'Создать продукт', link: '/create-product'},
  ]

  return (
    <header className={cl.header}>
      <div className={cl.container}>
        <NavLink to='/' className={cl.logo}>
          Products app
        </NavLink>

        <nav className={cl.navigation}>
          {navigation.map(navEl => (
            <NavLink
              key={navEl.title}
              to={navEl.link}
              className={({isActive}) =>
                isActive ? cl.active_link : cl.nav_link
              }
            >
              {navEl.title}
            </NavLink>
          ))}
        </nav>
      </div>

    </header>
  );
};

export default Header;