import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div style={navStyle}>
    <h1 className="section-title" style={title}>Kombucha!</h1>

    <nav className="about-us">
    <ul className="nav-class" style={navLinks}>
    <li style={listElementStyle}> <Link to='#all-products' className="nav-item" style={linksStyles}>Our Products</Link></li>
    <li style={listElementStyle}> <a href="#about-us" className="nav-item" style={linksStyles}/>About Us</li>
    <li style={listElementStyle}> <a href="#contact" className="nav-item" style={linksStyles}/>Contact </li>

    </ul>
    </nav>
    </div>
  )
}

export default Nav;
