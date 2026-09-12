import logo from './assets/Logo.svg';
function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt="Little Lemon logo" />
      </div>
      <div>
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone number</p>
        <p>email</p>
      </div>
      <div>
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;