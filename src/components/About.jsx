import React from 'react';
import '../styles/About.css';
import { FaRegHeart, FaMugHot, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about">
      <h2>We Care About the Quality of Our Products</h2>
      <div className="about-cards">
        <div className="about-card">
          <FaRegHeart className="about-icon" />
          <h3>Active Community</h3>
          <p>
            You can reach out to our community whenever you want and get help
            or share your experience.
          </p>
        </div>
        <div className="about-card">
          <FaMugHot className="about-icon" />
          <h3>Premium Quality</h3>
          <p>Our product is made with premium materials to ensure durability.</p>
        </div>
        <div className="about-card">
          <FaUsers className="about-icon" />
          <h3>Best Product Design</h3>
          <p>We worked hard to create a product that is not only functional but also aesthetically pleasing.</p>
        </div>
      </div>
      <button className="explore-button">Explore Our Products</button>
    </div>
  );
};

export default About;
