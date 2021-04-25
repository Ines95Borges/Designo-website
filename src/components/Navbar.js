import React, { useRef } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    textDecoration: "none",
    color: "black"
  }

  const dropdownMenu = useRef(null);
  const hamburger = useRef(null);
  const close = useRef(null);

  const openDropdownMenu = () => {
    dropdownMenu.current.style.display = "block";
    hamburger.current.style.display = "none";
    close.current.style.display = "block";
  }

  const closeDropdownMenu = () => {
    dropdownMenu.current.style.display = "none";
    hamburger.current.style.display = "block";
    close.current.style.display = "none";
  }

  return(
    <nav className="navbar">
      <Link to="/" style={navStyle}>
        <img src="/assets/shared/desktop/logo-dark.png" alt="logo" className="navbar--logo"/>
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
      <button class="navbar__toogle--btn-hamburger" ref={hamburger} onClick={openDropdownMenu}>
        <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fill-rule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"/></g></svg>
      </button>
      <button class="navbar__toogle--btn-close" ref={close} onClick={closeDropdownMenu}>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z" fill="#1D1C1E" fill-rule="evenodd"/></svg>
      </button>
      <ul className="navbar__dropdown-content" ref={dropdownMenu}>
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