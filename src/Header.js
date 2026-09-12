import logo from './assets/Logo.svg';
function Header() {
  return (
    <header className="header-container">
      <div className="nav-bar">
        <div className="logo-container">
          <img src={logo} alt="Little Lemon logo" />
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;