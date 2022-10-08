import { Link, useNavigate } from 'react-router-dom';
//services
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

export default function Navbar({ isAuth, setIsAuth, user }) {
  let navigate = useNavigate();
  //
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };
  return (
    <nav>
      {user && (
        <>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/wishlist">Wishlist</Link>
        </>
      )}

      {!user ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      ) : (
        <button onClick={signUserOut}>Logout</button>
      )}
    </nav>
  );
}
