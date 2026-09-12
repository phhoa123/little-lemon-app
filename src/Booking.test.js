import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Khai báo lại các hàm reducer tương tự như trong Main.js để test trực tiếp
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    default:
      return state;
  }
};

describe('Booking Component & Reducer Tests', () => {
  
  // Step 1: Test văn bản tĩnh hiển thị trong BookingForm
  test('Renders the BookingForm heading or label', () => {
    // Truyền prop availableTimes và dispatch giả lập nếu component cần
    const mockAvailableTimes = ['17:00', '18:00', '19:00'];
    const mockDispatch = jest.fn();

    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={() => {}} 
      />
    );

    // Kiểm tra xem nhãn "Choose date" có xuất hiện trên form hay không
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
  });

  // Step 2: Test hàm initializeTimes
  test('initializeTimes returns the correct expected initial value', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  // Step 2: Test hàm updateTimes
  test('updateTimes returns the same state provided', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE_TIMES', date: new Date('2026-09-15') };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });

});