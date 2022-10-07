// pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Search from './pages/search/Search';
import Signup from './pages/signup/Signup';
import Wishlist from './pages/wishlist/Wishlist'; // componenets
import Navbar from './components/navbar/Navbar';
// hooks
import { useState } from 'react';
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { signOut } from 'firebase/auth';
// services
import { auth } from './firebase/config';

function App() {
  // check if logged in
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
