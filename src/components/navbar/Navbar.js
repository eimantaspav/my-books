import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}
