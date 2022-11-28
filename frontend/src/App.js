import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { logout } from "./actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import LandingScreen from './screens/LandingScreen';
import AdminProductScreen from './screens/AdminProductScreen';

function App() {
  const { userInfo } = useSelector(store => store.userLogin);
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(logout());
    console.log(userInfo);
  }


  
  return (
    <BrowserRouter>
        <header className="header">
          <div className="logo"><Link to="/">Hidalgo</Link></div>
            { userInfo ? 
            <menu>
              {userInfo.isadmin ?
              <li><Link to = "/adminpage">{userInfo.first_name}</Link></li>:
              <li>{userInfo.first_name}</li>
            }
            <li>Cart</li>
            <button onClick={handleLogout}>Logout</button> 
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
              <Route path ="adminpage" element={<AdminProductScreen />} />
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
