import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { logout } from "./actions/userActions";
import { useSelector } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import LandingScreen from './screens/LandingScreen';
import { useEffect } from 'react';

function App() {

  const { userInfo } = useSelector(store => store.userLogin);

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  }

  useEffect(() => {       
}, [userInfo]);
  
  return (
    <BrowserRouter>
        <header className="header">
          <div className="logo"><Link to="/">Hidalgo</Link></div>
            { userInfo ? 
            <menu>
            <li>{userInfo.first_name}</li>
            <li>Cart</li>
            <li onClick={handleClick}>Logout</li> 
            </menu>
            :
            <menu>
            <li>Cart</li>
            <li><Link to="/login">Login</Link></li>
            </menu>
            }
        </header>
        <main className="main">
          <div className="content">
            <Routes>
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/products/:id" element={<ProductScreen />} />
              <Route path="/cart/:id" element={<CartScreen />} />
              <Route path="/products" element={<HomeScreen />} />
              <Route path="/" element={<LandingScreen />} />
            </Routes>
          </div>
      </main>
      <footer className="footer">All Rights Reserved.</footer>
    </BrowserRouter>
  );
}

export default App;
