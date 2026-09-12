import React from 'react';

function ConfirmedBooking() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '80px 20px', 
      minHeight: '65vh',
      textAlign: 'center' 
    }}>
      <h1 style={{ color: '#495E57', fontSize: '2.5rem', marginBottom: '20px' }}>
        Booking Confirmed!
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#333', maxWidth: '600px', lineHeight: '1.5' }}>
        Your table has been successfully reserved at Little Lemon. We look forward to seeing you!
      </p>
    </div>
  );
}

export default ConfirmedBooking;