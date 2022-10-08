import styles from './Navbar.module.css';
//
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
    <nav className={styles.nav}>
      <div className={styles.container}>
        {user && (
          <>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
          </>
        )}

        {user && <button onClick={signUserOut}>Logout</button>}
      </div>
    </nav>
  );
}
