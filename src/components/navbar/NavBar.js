import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Navbar.module.css'
import { FcTodoList } from 'react-icons/fc';

const NavBar = () => {
  return (
    <div className={Style.container}>
      <div className={Style.links}>
        <FcTodoList className={Style.icon} />
        <div className={Style.linksInner}>
          <Link to="/" className={Style.link}>Notes</Link>
          <Link to="todo" className={Style.link}>List</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
