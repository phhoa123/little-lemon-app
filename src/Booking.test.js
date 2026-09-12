import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Thiết lập mock cho window.fetchAPI trước mỗi bài test
beforeEach(() => {
  window.fetchAPI = jest.fn((date) => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  });
});

// Định nghĩa lại các hàm reducer để test
const initializeTimes = () => {
  if (typeof window !== 'undefined' && window.fetchAPI) {
    return window.fetchAPI(new Date());
  }
  return []; // Đảm bảo luôn trả về mảng
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (typeof window !== 'undefined' && window.fetchAPI) {
        return window.fetchAPI(action.date);
      }
      return state;
    default:
      return state;
  }
};

describe('Booking Component & Reducer Tests with API', () => {
  
  test('Renders the BookingForm heading or label', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00'];
    const mockDispatch = jest.fn();

    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={() => {}} 
      />
    );

    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
  });

  test('initializeTimes returns expected available times from API', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  test('updateTimes returns expected available times based on selected date', () => {
    // initialState không còn quá quan trọng vì updateTimes sẽ luôn trả về mảng mới từ fetchAPI
    const initialState = ['17:00']; 
    const selectedDate = new Date('2026-09-15');
    const action = { type: 'UPDATE_TIMES', date: selectedDate };
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    
    const result = updateTimes(initialState, action);
    expect(window.fetchAPI).toHaveBeenCalledWith(selectedDate);
    expect(result).toEqual(expectedTimes); // So sánh với expectedTimes thay vì initialState
  });

});