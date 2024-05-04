import React from "react";
import '../styles/Hero.css';
const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Drinksio</h1>
        <h2>An online BEER store</h2>
        <p>Explore our wide range of craft beers and enjoy the best flavors.</p>
        
        <div className="call-to-action">
          <button>Explore Our Products</button>
          <button>Login/Register</button>
        </div>
        <div className="beer-numbers">
          <div className="cards">
            <h2>Total Sales</h2>
            <p>10,000</p>
          </div>
          <div className="Line"></div>
          <div className="cards">
            <h2>Total Sales</h2>
            <p>10,000</p>
          </div>
          <div className="Line"></div>
          <div className="cards">
            <h2>Total Sales</h2>
            <p>10,000</p>
          </div>
        </div>
        <h3>Savor the Craft: Discover Handcrafted Brews for Every Palate</h3>
      </div>
      <div class="imgBox">
        <img  src="teo.jpg" 
          alt="Craft Beers" 
          loading="lazy" class="mouse"/>
      </div>
    </div>
  );
}

export default Hero;