import React from 'react';

function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      rating: "★★★★★",
      name: "John Doe",
      avatar: "https://via.placeholder.com/60",
      review: "Great food and wonderful atmosphere!"
    },
    {
      id: 2,
      rating: "★★★★★",
      name: "Jane Smith",
      avatar: "https://via.placeholder.com/60",
      review: "The best Mediterranean dishes in town."
    },
    {
      id: 3,
      rating: "★★★★☆",
      name: "Alex Johnson",
      avatar: "https://via.placeholder.com/60",
      review: "Loved the service and the lemon dessert."
    },
    {
      id: 4,
      rating: "★★★★★",
      name: "Emily Davis",
      avatar: "https://via.placeholder.com/60",
      review: "An absolute gem of a restaurant!"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <div className="rating">{item.rating}</div>
              <div className="user-profile">
                <img src={item.avatar} alt={item.name} className="avatar" />
                <span className="name">{item.name}</span>
              </div>
              <p className="review-text">"{item.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;