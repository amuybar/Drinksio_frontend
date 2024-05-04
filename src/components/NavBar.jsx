import React, { useRef, useState } from "react";
import { FaBars, FaTimes, FaSearch, FaCartPlus } from "react-icons/fa";
import '../styles/NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    navRef.current.classList.toggle("active");
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="heading">
        <img src="beer_mog.svg" alt="Logo" />
        <h1>Drinksio</h1>
      </div>
      <div ref={navRef} className={menuOpen ? "nav-links active" : "nav-links"}>
        <select>
          <option>Product</option>
          <option>About</option>
          <option>Services</option>
          <option>Contact</option>   
        </select>
        <a href="#">Special offer</a>
        <a href="#">The Process</a>
        <a href="#">Packing</a>
        <div className="icons">
          <div className="search">
            <FaSearch />
          </div>
          <div className="cart">
            <FaCartPlus />
          </div>
        </div>
        <input type="text" placeholder="Search"  />
        <div className="auth-btn">
          <h3>Signup/SignIn</h3>
        </div>  
      </div>
      <div className="mobile-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default NavBar;
