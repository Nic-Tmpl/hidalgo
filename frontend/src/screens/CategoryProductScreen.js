import React, { useEffect } from 'react';
import '../App.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


function CategoryProductScreen() {


   const { id } = useParams(); //useParams returns an object with string values

   const productList = useSelector(store => store.productList);
   const { products, loading, error} = productList;
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(listProducts(id));
   }, [])
     return (
       loading ? <div>loading...</div> :
       error ? <div>{error}</div> :
         <ul className="product">
         {
           products.map(product =>
             <li key={product.id}>
               <img className="product-image" src={product.image} alt = "product" />
               <div className="product-name">
                 <Link to={`/products/${product.id}`}>{product.name}</Link>
               </div>
               <div className="product-price">${product.price}</div>
               <div className="product-rating">{product.rating} Stars ({product.numreviews} Reviews)</div>
             </li>)
        }
       </ul>)
 }
 

export default CategoryProductScreen;