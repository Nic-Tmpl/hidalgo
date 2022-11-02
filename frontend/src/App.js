import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
        <header className="header">
          <div className="logo">Tester</div>
          <menu>
            <li>Cart</li>
            <li>Login</li>
          </menu>
        </header>
        <main className="main">
          <div className="content">
            <Routes>
              <Route path="/products/:id" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </div>
      </main>
      <footer className="footer">All Rights Reserved.</footer>
    </BrowserRouter>
  );
}

export default App;
