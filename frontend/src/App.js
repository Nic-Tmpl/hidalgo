import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import LandingScreen from './screens/LandingScreen';

function App() {
  return (
    <BrowserRouter>
        <header className="header">
          <div className="logo"><Link to="/">Hidalgo</Link></div>
          <menu>
            <li>Cart</li>
            <li><Link to="/login">Login</Link></li>
          </menu>
        </header>
        <main className="main">
          <div className="content">
            <Routes>
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/products" element={<HomeScreen />} />
              <Route path="/products/:id" element={<ProductScreen />} />
              <Route path="/cart/:id" element={<CartScreen />} />
              <Route path="/" element={<LandingScreen />} />
            </Routes>
          </div>
      </main>
      <footer className="footer">All Rights Reserved.</footer>
    </BrowserRouter>
  );
}

export default App;
