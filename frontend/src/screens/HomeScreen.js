import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


function HomeScreen(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/appi/products");
      setProducts(data);
    }
    return() => {

    }
  }, [])
    return (

        <ul className="product">
        {
          products.map(product =>
            <li>
              <img className="product-image" src={product.image} alt = "product" />
              <div className="product-name">
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
            </li>)
       }
      </ul>)
}

export default HomeScreen;