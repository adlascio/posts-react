import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      {/* <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a> */}
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
    </nav>
  );
}
