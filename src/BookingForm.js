import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || '18:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Hàm xử lý khi thay đổi ngày -> gọi dispatch để cập nhật giờ tương ứng
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: new Date(selectedDate) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        display: 'grid', 
        maxWidth: '400px', 
        margin: '0 auto', 
        gap: '20px', 
        fontSize: '1.1rem' 
      }}
    >
      <label htmlFor="res-date" style={{ fontWeight: 'bold', color: '#333' }}>Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange} 
        required
        style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
      />

      <label htmlFor="res-time" style={{ fontWeight: 'bold', color: '#333' }}>Choose time</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)}
        style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests" style={{ fontWeight: 'bold', color: '#333' }}>Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        required
        style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
      />

      <label htmlFor="occasion" style={{ fontWeight: 'bold', color: '#333' }}>Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)}
        style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input 
        type="submit" 
        value="Make Your reservation" 
        style={{ 
          backgroundColor: '#F4CE14', 
          border: 'none', 
          padding: '14px', 
          fontWeight: 'bold', 
          fontSize: '1.1rem',
          cursor: 'pointer', 
          borderRadius: '8px',
          marginTop: '10px',
          color: '#333'
        }}
      />
    </form>
  );
}

export default BookingForm;