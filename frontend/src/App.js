import './App.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { logout } from "./actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import AllProductsScreen from './screens/AllProductsScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import LandingScreen from './screens/LandingScreen';
import AdminProductScreen from './screens/AdminProductScreen';
import CategoryProductScreen from './screens/CategoryProductScreen';
import UserScreen from './screens/UserScreen';
import OrderScreen from './screens/OrderScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import CongratsScreen from './screens/CongratsScreen';

function App() {
  const { userInfo } = useSelector(store => store.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleLogout = () => {
    dispatch(logout());
    console.log(userInfo); 
    navigate("/");
  }

  //this capitalizes the first letter of the user's name, so display is the prettiest girl at the ball
  const userName = userInfo ? userInfo.first_name.charAt(0).toUpperCase() + userInfo.first_name.slice(1) : '' ;



  
  return (
      <div className="body">
        <div className="content-wrap">
        <header className="header">
          <div className="logo"><Link to="/">Hidalgo</Link></div>
            { userInfo ? 
            <menu>
              {userInfo.isadmin ?
              <li><Link to="/adminpage">{userInfo.first_name}</Link></li>:
              <li><Link to={`/users/${userInfo.id}`}>{userName}</Link></li>
            }
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li className="logout-button" onClick={handleLogout}>Logout</li> 
            </menu>
            :
            <menu>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/login">Login</Link></li>
            </menu>
            }
        </header>
        <main className="main">
          <div className="content">
            <Routes>
              <Route path ="/adminpage" element={<AdminProductScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/users/:id" element={<UserScreen />} />
              <Route path="/orders/:id" element={<OrderScreen />} />
              <Route path="/products/categories/:id" element={<CategoryProductScreen />} />
              <Route path="/products/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/cart/:id" element={<CartScreen />} />
              <Route path="/products" element={<AllProductsScreen />} />
              <Route path ="/shipping" element={<ShippingScreen />} />
              <Route path="/shipping/payment" element={<PaymentScreen />} />
              <Route path="shipping/place-order" element={<PlaceOrderScreen />} />
              <Route path="/congrats" element={<CongratsScreen />} />
              <Route path="/" element={<LandingScreen />} />
            </Routes>
          </div>
      </main>
      </div>
      <footer className="footer">All Rights Reserved.</footer>
  </div>
  );
}

export default App;
