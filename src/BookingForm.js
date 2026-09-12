import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || '18:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  
  const handleDateChange = (e) => {
    const selectedDate = e.target.value; // dạng chuỗi 'YYYY-MM-DD'
    setDate(selectedDate);
    // Chuyển chuỗi thành đối tượng Date truyền vào action.date
    dispatch({ type: 'UPDATE_TIMES', date: new Date(selectedDate) });
  };

  // Kiểm tra tính hợp lệ cơ bản của form (Client-side validation)
  const isFormValid = date !== '' && time !== '' && guests >= 1 && guests <= 10;

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      submitForm({ date, time, guests, occasion });
    }
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
        required
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

      {/* Nút Submit: Bị vô hiệu hóa (disabled) nếu form chưa điền đúng yêu cầu */}
      <button 
        type="submit" 
        disabled={!isFormValid}
        aria-label="On Click"
        style={{
          backgroundColor: isFormValid ? '#F4CE14' : '#cccccc',
          color: '#333',
          padding: '12px',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: isFormValid ? 'pointer' : 'not-allowed'
        }}
      >
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;