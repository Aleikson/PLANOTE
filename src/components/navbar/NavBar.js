import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='container'>
      <div className='links'>
        <Link to="/">Notes</Link>
        <Link to="todo">List</Link>
      </div>
    </div>
  );
};

export default NavBar;
