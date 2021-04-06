import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    textDecoration: "none",
    color: "black"
  }

  return(
    <nav className="navbar">
      <Link to="/" style={navStyle}>
        <img src="/assets/shared/desktop/logo-dark.png" alt="logo" className="navbar__logo"/>
      </Link>
      <ul className="navbar__content">
        <Link to="/about">  
          <li>our company</li>
        </Link>
        <Link to="/locations">
          <li>locations</li>
        </Link>
        <Link to="/contact">
          <li>contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar;