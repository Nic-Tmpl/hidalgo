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

function App() {
  const { userInfo } = useSelector(store => store.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleLogout = () => {
    dispatch(logout());
    console.log(userInfo); 
    navigate("/");
  }


  
  return (
      <div className="body">
        <header className="header">
          <div className="logo"><Link to="/">Hidalgo</Link></div>
            { userInfo ? 
            <menu>
              {userInfo.isadmin ?
              <li><Link to="/adminpage">{userInfo.first_name}</Link></li>:
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
              <Route path ="/adminpage" element={<AdminProductScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/users/:id" element={<UserScreen />} />
              <Route path="/orders/:id" element={<OrderScreen />} />
              <Route path="/products/categories/:id" element={<CategoryProductScreen />} />
              <Route path="/products/:id" element={<ProductScreen />} />
              <Route path="/cart/:id" element={<CartScreen />} />
              <Route path="/products" element={<AllProductsScreen />} />
              <Route path="/" element={<LandingScreen />} />
            </Routes>
          </div>
      </main>
      <footer className="footer">All Rights Reserved.</footer>
  </div>
  );
}

export default App;
