import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Navbar.module.css'

const NavBar = () => {
  return (
    <div className={Style.container}>
      <div className={Style.links}>
        <div className={Style.linksInner}>
          <Link to="/" className={Style.link}>Daily Notes</Link>
          <Link to="todo" className={Style.link}>My Tasks</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;