import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import BookingPage from './BookingPage';

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
    // 1. Hàm khởi tạo giá trị ban đầu cho availableTimes
  const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  // 2. Hàm reducer cập nhật times dựa trên ngày được chọn (dispatch action)
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // Hiện tại trả về danh sách giờ mặc định (có thể mở rộng logic theo ngày sau)
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      default:
        return state;
    }
  };

  // 3. Khai báo useReducer
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const navigate = useNavigate();

  // Hàm giả lập submit form đặt bàn
  const submitForm = (formData) => {
    console.log("Submitted data:", formData);
    alert("Reservation successful!");
    navigate("/"); // Chuyển hướng về trang chủ sau khi đặt bàn thành công
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
      </Routes>
    </main>
  );
}

export default Main;