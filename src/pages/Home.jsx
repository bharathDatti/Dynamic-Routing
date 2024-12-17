import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to the Winter Deals Store</h1>
        <p className="hero-subtitle">
          Discover exclusive products, unbeatable prices, and limited-time offers.
        </p>
        <NavLink to="/products"  className="hero-btn"> Shop Now</NavLink>
      </div>
    </section>
  );
};

export default Hero;
