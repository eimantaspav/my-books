// pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Search from './pages/search/Search';
import Signup from './pages/signup/Signup';
import Wishlist from './pages/wishlist/Wishlist';
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}
export default App;
