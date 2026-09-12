import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import BookingPage from './BookingPage'; // Component trang đặt bàn của bạn

// Tạo một component HomePage gộp các phần của trang chủ
function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* Bạn có thể tạo các component riêng cho Menu, Order, Login hoặc tạm thời dùng lại HomePage/About */}
        <Route path="/menu" element={<Highlights />} /> 
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/order-online" element={<div style={{padding: '50px', textAlign: 'center'}}><h2>Order Online Page</h2></div>} />
        <Route path="/login" element={<div style={{padding: '50px', textAlign: 'center'}}><h2>Login Page</h2></div>} />
      </Routes>
    </main>
  );
}

export default Main;