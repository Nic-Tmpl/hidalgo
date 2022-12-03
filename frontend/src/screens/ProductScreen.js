import React, { useEffect, useState } from 'react';
import '../App.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';


function ProductScreen() {

   const [qty, setQty] = useState(1); //uses state to manage quantity of items selected for cart

   const { id } = useParams(); //useParams returns an object with string values
   const navigate = useNavigate(); 

   const productDetails = useSelector(store => store.productDetails);
   const { product, loading, error } = productDetails;

   const userDetails = useSelector(store => store.userLogin);
   const { userInfo } = userDetails;

   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(detailsProduct(id));   
   }, [])

const handleAddToCart = (e) => {
    e.preventDefault();
    userInfo.id ? navigate(`/cart/${id}?quantity=${qty}`) : navigate('/login');
}
    return (
        loading ? <div>loading...</div> :
        error ? <div>{error}</div> :
        <div className="product-details">
            <div className="details-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="details-info">
                <h1>{product.name}</h1>
                <h3>${product.price}</h3>
                <p>{product.rating} ({product.numReviews} Reviews)</p>
            </div>
            <div className="details-order">
                <p>Price: ${product.price}</p>
                <form id="quantity-form" onSubmit={handleAddToCart}>
                    <label htmlFor="quantity">Qty: </label>
                    <input id="quantity" type="number" name="quantity" min="0" value={qty} onChange={(e) => setQty(e.target.value)}/><br/>
                </form>
                <button type="submit" form="quantity-form">Add to Cart</button>

            </div>
        </div>
    );
};

export default ProductScreen;