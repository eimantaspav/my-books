// pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Search from './pages/search/Search';
// componenets
import Navbar from './components/navbar/Navbar';
// services
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
// hooks
import { useState, useEffect } from 'react';
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // check if logged in
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setIsAuth(true);
    });
  }, [user]);
  //
  return (
    <BrowserRouter>
      {isAuth && <Navbar user={user} setIsAuth={setIsAuth} />}
      <Routes>
        <Route path="/" element={<Home user={user} />}></Route>
        <Route path="/search" element={<Search />} isAuth={isAuth}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
