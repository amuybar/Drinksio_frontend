import React from 'react';
import { FaHome, FaBook, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul className='in-links'>
          <h3>In-Links</h3>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <ul className='term-links'>
          <h3>Term-Links</h3>
          <li><a href="#">Terms of Services</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
        <ul className='services-links'>
          <h3>Services-Links</h3>
          <li><a href="#">Order Ahead</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Services</a></li>
        </ul>
        <ul className='Information-links'>
          <h3>Information-Links</h3>
          <li><a href="#">Plans & Pricing</a></li>
          <li><a href="#">Sell Your Product</a></li>
          <li><a href="#">Job Openings</a></li>
        </ul>
      </div>
      <div className="social-media-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaEnvelope />    
        <FaBook/>
        <FaHome/>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Drinksio Beer. All rights reserved.</p>
        <a href='#'> Support </a>
      </div>  
    </div>
  );
};

export default Footer;