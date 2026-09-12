import React from 'react';
import logoFooter from './assets/Logo .svg'; // Hoặc đường dẫn file logo của bạn

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Cột 1: Logo */}
        <div className="footer-col logo-col">
          <img src={logoFooter} alt="Little Lemon logo" className="footer-logo" />
        </div>

        {/* Cột 2: Doormat Navigation */}
        <div className="footer-col">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* Cột 3: Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>123 Chicago St, IL</li>
            <li>+1 234-567-8900</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>

        {/* Cột 4: Social Media Links */}
        <div className="footer-col">
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;