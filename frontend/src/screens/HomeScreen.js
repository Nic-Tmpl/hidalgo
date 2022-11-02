import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function HomeScreen(props) {
    return (

        <ul className="product">
        {
          data.products.map(product =>
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