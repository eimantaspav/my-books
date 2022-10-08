import styles from './Login.module.css';
import loginImg from '../../img/loginImg.svg';
// services
import { auth, googleProvider } from '../../firebase/config';
import { signInWithPopup } from 'firebase/auth';
//
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
      <div className={styles.login__container}>
        <h1>
          Welcome! <br /> Please sign in to search for books
        </h1>
        <img src={loginImg} alt="" />
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
}
