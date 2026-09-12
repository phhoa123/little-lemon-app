import React from 'react';
import chefA from './assets/restaurant chef B.jpg'; // Ảnh đầu bếp/nhà hàng thứ nhất
import chefB from './assets/restaurant.jpg';     // Ảnh đầu bếp/nhà hàng thứ hai

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Phần thông tin văn bản bên trái */}
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming family-owned Mediterranean restaurant in Chicago, offering traditional recipes, fresh seasonal ingredients, and a warm, vibrant neighborhood dining atmosphere.
          </p>
        </div>

        {/* Phần hình ảnh xếp chồng bên phải */}
        <div className="about-images">
          <img src={chefA} alt="Little Lemon restaurant chef" className="about-img-1" />
          <img src={chefB} alt="Little Lemon restaurant interior" className="about-img-2" />
        </div>
      </div>
    </section>
  );
}

export default About;