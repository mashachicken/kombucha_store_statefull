import React from 'react';


function Nav() {
  return (
    <div style={careersStyle}>
    <h1 className="section-title" style={title}>Kombucha!</h1>

    <nav className="about-us">
    <ul className="nav-class" style={careerLinks}>
    <li style={listElementStyle}> <a href="#all-products" className="nav-item" style={linksStyles}/>Our Products </li>
    <li style={listElementStyle}> <a href="#about-us" className="nav-item" style={linksStyles}/>About Us</li>
    <li style={listElementStyle}> <a href="#contact" className="nav-item" style={linksStyles}/>Contact </li>

    </ul>
    </nav>
    </div>
  )
}

export default Nav;
