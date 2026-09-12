import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Thêm dòng import này
import App from './App';

test('renders learn react link or header', () => {
  render(
    <BrowserRouter> {/* Bọc App trong BrowserRouter */}
      <App />
    </BrowserRouter>
  );
  
  const linkElement = screen.getByText(/Little Lemon/i); 
  expect(linkElement).toBeInTheDocument();
});