import React from 'react';





function Nav() {
  return (
    <div style={careersStyle}>
    <h1 className="section-title" style={title}>Careers</h1>

    <nav className="about-us">
    <ul className="nav-class" style={careerLinks}>
    <li style={listElementStyle}> <a href="#about-us" className="nav-item" style={linksStyles}/>About </li>
    <li style={listElementStyle}> <a href="#careers" className="nav-item" style={linksStyles}/>Careers </li>
    <li style={listElementStyle}> <a href="#contact" className="nav-item" style={linksStyles}/>Contact </li>
    <li style={listElementStyle}> <a href="#legal" className="nav-item" style={linksStyles}/>Legal </li>
    <li style={listElementStyle}> <a href="#investors" className="nav-item" style={linksStyles}/>Investors </li>
    <li style={listElementStyle}> <a href="#suppliers" className="nav-item" style={linksStyles}/>Suppliers </li>
    </ul>
    </nav>
    </div>
  )
}

export default Nav;
