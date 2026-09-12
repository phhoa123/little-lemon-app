import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

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
  // 1. Sử dụng fetchAPI lấy giờ cho ngày hiện tại (hàm fetchAPI nhận đối tượng Date)
  const initializeTimes = () => {
    return window.fetchAPI ? window.fetchAPI(new Date()) : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  
  // 2. Cập nhật hàm updateTimes để gọi fetchAPI dựa trên ngày người dùng chọn từ action
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return window.fetchAPI ? window.fetchAPI(action.date) : state;
      default:
        return state;
    }
  };

  // 3. Khai báo useReducer

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate();

  
  // 3. Tích hợp submitAPI khi submit form
  const submitForm = (formData) => {
    const success = window.fetchAPI ? window.submitAPI(formData) : true;
    if (success) {
      console.log("Submitted successfully:", formData);
      alert("Reservation successful!");
      navigate("confirmed"); // Chuyển hướng về trang chủ sau khi đặt bàn thành công
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* Bạn có thể tạo các component riêng cho Menu, Order, Login hoặc tạm thời dùng lại HomePage/About */}
        <Route path="/menu" element={<Highlights />} /> 
        <Route 
          path="/reservations" 
          element={
            <BookingPage 
              availableTimes={availableTimes} 
              dispatch={dispatch} 
              submitForm={submitForm} 
            />
          } 
        />
        <Route path="/order-online" element={<div style={{padding: '50px', textAlign: 'center'}}><h2>Order Online Page</h2></div>} />
        <Route path="/login" element={<div style={{padding: '50px', textAlign: 'center'}}><h2>Login Page</h2></div>} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;