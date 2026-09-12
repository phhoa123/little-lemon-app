import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page" style={{ padding: '60px 20px', minHeight: '65vh' }}>
      <h1 style={{ textAlign: 'center', color: '#495E57', fontSize: '2.5rem', marginBottom: '30px' }}>
        Table Reservation
      </h1>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        submitForm={submitForm} 
      />
    </div>
  );
}

export default BookingPage;