import React from 'react';
import greekSaladImg from './assets/greek salad.jpg';
import bruchettaImg from './assets/bruchetta.svg';
import lemonDessertImg from './assets/lemon dessert.jpg';

function Highlights() {
  const specials = [
    {
      image: greekSaladImg,
      title: "Greek salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
      image: bruchettaImg,
      title: "Bruchetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
      image: lemonDessertImg,
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
  ];

  return (
    <section className="highlights-section">
      <div className="highlights-container">
        {/* Phần tiêu đề và nút bấm Online Menu */}
        <div className="highlights-header">
          <h2>This weeks specials!</h2>
          <button className="online-menu-btn">Online Menu</button>
        </div>

        {/* Lưới chứa 3 thẻ món ăn */}
        <div className="specials-grid">
          {specials.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-image-container">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-content">
                <div className="card-title-price">
                  <h3>{item.title}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <div className="card-footer">
                  <a href="#order" className="order-delivery-link">
                    Order a delivery <span className="delivery-icon">🛵</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;