import React from 'react';
import { Link } from 'react-router-dom';
import Kombuchas from './Kombuchas';
import AboutUs from './AboutUs';


function Nav() {
  const ulStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  textDecoration: 'none',
  listStyleType: 'none'

};

const navStyle = {
  display: 'grid',
  gridTemplateColumns: '2fr 13fr 1fr',
  height: '60px',
  fontSize: '13px',
  textAlign: 'center',
  zIndex: '1',
  overflow: 'hidden',
  position: 'fixed',
  backgroundColor: 'white',
  width: '100%'
}
const title = {
  paddingBottom: '2px',
  fontWeight: 'normal',
  fontSize: "31px"
}

const linx = {
  fontFamily: 'Arial,sans-serif',
  fontWeight: 'bold',
  textDecoration: 'none',
  listStyleType: 'none',
  float: 'left',
  display: 'inline-block',
   margin: '5px 10px',
   color: 'black'
}
const lStyles = {
  textDecoration: 'none'
}
  return (
    <div>
     <header style={navStyle}>
    <h1 className="section-title" style={title}>Kombucha!</h1>

    <nav className="about-us">
    <ul className="nav-class" style={ulStyle}>
    <li style={lStyles}> <Link to='all-products' className="nav-item" style={linx}>Our Products</Link></li>
    <li style={lStyles}> <Link to="about-us" className="nav-item" style={linx}>About Us</Link></li>
    <li style={lStyles}> <Link to="contact" className="nav-item" style={linx}>Contact</Link> </li>

    </ul>
    </nav>
    </header>
    </div>
  )
}

export default Nav;
