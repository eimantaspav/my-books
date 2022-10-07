import styles from './Login.module.css';
import { auth, googleProvider } from '../../firebase/config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsAuth }) {
  let navigate = useNavigate();
  //
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then(result => {
      // is logged in
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };

  return (
    <div className={styles.login}>
      <p>Sign In With Google</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}
