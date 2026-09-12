import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

beforeEach(() => {
  window.fetchAPI = jest.fn((date) => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  });
});

describe('BookingForm Validation Tests', () => {
  
  // Test 1: Kiểm tra render nhãn và tiêu đề form
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

  // Test 2: Kiểm tra các thuộc tính HTML5 validation (required, min, max) được áp dụng đúng
  test('HTML5 validation attributes are correctly applied to form inputs', () => {
    const mockAvailableTimes = ['17:00', '18:00'];
    const mockDispatch = jest.fn();

    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={() => {}} 
      />
    );

    // Kiểm tra trường ngày có thuộc tính required
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');

    // Kiểm tra trường số lượng khách có thuộc tính min, max, required
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');

    // Kiểm tra trường giờ có thuộc tính required
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toHaveAttribute('required');
  });

  // Test 3: Kiểm tra nút Submit bị vô hiệu hóa khi dữ liệu form chưa hợp lệ
  test('Submit button is disabled when form inputs are invalid', () => {
    const mockAvailableTimes = ['17:00'];
    const mockDispatch = jest.fn();

    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={() => {}} 
      />
    );

    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    
    // Ban đầu khi chưa chọn ngày (date rỗng), nút submit phải bị disabled
    expect(submitButton).toBeDisabled();
  });

});