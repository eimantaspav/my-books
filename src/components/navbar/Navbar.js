import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

export default function Navbar({ isAuth, setIsAuth }) {
  let navigate = useNavigate();

  // sign out
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/wishlist">Wishlist</Link>
      {!isAuth ? <Link to="/login">Login</Link> : <button onClick={signUserOut}>Logout</button>}
      <Link to="/signup">Signup</Link>
    </nav>
  );
}
