import React, { useEffect, useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsOrder } from '../actions/orderActions';



function OrderScreen() {

    const userdetails = useSelector(store => store.userLogin);
    const { userInfo } = userdetails;

    const orderDetails = useSelector(store => store.orderDetails);
    const { order, loading, error } = orderDetails;

   const { orderId } = useParams(); //useParams returns an object with string values
   const [userId, setuserId] = useState(userInfo.id);


   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(detailsOrder(orderId, userId));   
   }, [])
    return (
        loading ? <div>loading...</div> :
        error ? <div>{error}</div> :
        <div className="order-details">
            <div className="order-info">
                <h1>ORDER ID: {order.id}</h1>
                <h1>STATUS: {order.status}</h1>
                <h1>TOTAL: {order.total}</h1>
            </div>
            {/*}
            {products.map(product) =>
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div> */}
        </div>
    );
};

export default OrderScreen;