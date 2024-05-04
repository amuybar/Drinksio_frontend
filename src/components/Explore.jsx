import React from 'react';
import '../styles/Explore.css';

const Explore = () => {
  return (
    <div className="explore">
      <div className="explore-content">
        <h2>Explore More of Our Beers</h2>
        <p>Check out our wide range of high-quality beers handcrafted for you.</p>
        <button>Explore Now</button>
      </div>
      <div className="explore-image">
        <img src="beer_640.jpg" alt="Explore Beers" />
      </div>
    </div>
  );
}

export default Explore;