import React from "react";
import '../styles/Recent.css';
import {FaHeart} from 'react-icons/fa';

const Recent = () => {
  const beers = [
    {
      name: "Beer One",
      price: 10,
      image: "beer-820011_1280.jpg",
    },
    {
      name: "Beer Two",
      price: 12,
      image: "beer-2439237_640.jpg",
    },
    {
      name: "Beer Three",
      price: 8,
      image: "beer-3378136_640.jpg",
    },
  ];
  return (
    <div className="recent-body">
      <h2>Recent beers on shelves</h2>
      <p>Explore our Most Recent Beer Selection With dedicated Flavor Personilize for various Customers</p>
    <div className="recent">
      {beers.map((beer, index) => (
        <div className="beer-card" key={index}>
          <img src={beer.image} alt={beer.name}  loading="lazy" />
          <div className="beer-details">
            <h3>{beer.name}</h3>
            <p>${beer.price}</p>
          </div>
          <div className="card-action">
            <button>Add to Cart</button>
            <button><FaHeart/></button>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default Recent;
