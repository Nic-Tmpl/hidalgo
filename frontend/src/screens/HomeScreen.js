import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


function HomeScreen(props) {

  const productList = useSelector(state => state.productList);
  const { products, loading, error} = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());

    return() => {

    }
  }, [])
    return (

        <ul className="product">
        {
          products.map(product =>
            <li key={product.id}>
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