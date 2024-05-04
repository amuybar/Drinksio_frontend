import React, { useState } from 'react';
import '../styles/TopSellers.css';
import {  FaCartArrowDown } from 'react-icons/fa';

const TopSellers = () => {
  const [activeTab, setActiveTab] = useState('All');
  const heading = 'Weekend Special Beer Discount';
  const subHeading = 'Check Our Special Beer Discount That you get from 20% discount, Only on weekends';

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Dummy product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$10',
      image:'/beer-3804654_640.webp',
      category: 'Most Viewed'
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$15',
      image:'/beer-3804654_640.webp',
      category: 'Most Viewed'
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$20',
      image:'/beer-3804654_640.webp',
      category: 'Most Viewed'
    },
    {
      id: 4,
      name: 'Top Seller 1',
      price: '$12',
      image: '/beer-3804654_640.webp',
      category: 'Top Sellers'
    },
    {
      id: 5,
      name: 'Top Seller 2',
      price: '$18',
      image: '/beer-3804654_640.webp',
      category: 'Top Sellers'
    },
    {
      id: 6,
      name: 'Top Seller 3',
      price: '$22',
      image: '/beer-3804654_640.webp',
      category: 'Top Sellers'
    },
    {
      id: 7,
      name: 'Popular 1',
      price: '$11',
      image:'/beer-3804654_640.webp',
      category: 'Most Popular'
    },
    {
      id: 8,
      name: 'Popular 2',
      price: '$17',
      image:'/beer-3804654_640.webp',
      category: 'Most Popular'
    },
    {
      id: 9,
      name: 'Popular 3',
      price: '$21',
      image:'/beer-3804654_640.webp',
      category: 'Most Popular'
    },
    // Add more products as needed
  ];

  // Filter products based on active tab
  const filteredProducts = activeTab === 'All' ? products : products.filter(product => product.category === activeTab);

  return (
    <div className="product-tabs">
      <h2>{heading}</h2>
      <p>{subHeading}</p>
      <div className="tab-list">
        {['All', 'Top Sellers', 'Most Popular', 'Most Viewed'].map(tab => (
          <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => handleTabChange(tab)}>{tab}</button>
        ))}
      </div>
      <div className="product-container">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div class="card">

      <div class="imgBox">
        <img src={product.image} alt={product.name} class="mouse"/>
      </div>

      <div class="contentBox">
        <h3>{product.name}</h3>
        <h2 class="price">{product.price}<small>.00</small> €</h2>
        <a href="#" class="buy">Buy Now</a>
        <button><FaCartArrowDown/></button>
      </div>

    </div>
  );
};
 
export default TopSellers;
