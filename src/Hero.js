import React from 'react';
import heroImage from './assets/restauranfood.jpg'; // Đảm bảo đường dẫn tới file ảnh đúng với dự án của bạn

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className="reserve-btn">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Little Lemon restaurant food" />
        </div>
      </div>
    </section>
  );
}

export default Hero;