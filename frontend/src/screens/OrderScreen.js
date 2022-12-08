import React, { useEffect, useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsOrder } from '../actions/orderActions';



function OrderScreen() {

    const userDetails = useSelector(store => store.userLogin);
    const { userInfo } = userDetails;

    const orderDetails = useSelector(store => store.orderDetails);
    const { order, loading, error } = orderDetails;

   const { id } = useParams(); //useParams returns an object with string values
   const [userId, setuserId] = useState(userInfo.id);


   const dispatch = useDispatch();

   useEffect(() => {
    console.log(id);
    dispatch(detailsOrder(id, userId));   
   }, [])
    return (
        loading ? <div>loading...</div> :
        error ? <div>{error}</div> :
        <div className="order-details">
            <div className="order-info">
                <h1>ORDER ID: {order[0].id}</h1>
                <h1>STATUS: {order[0].status}</h1>
                <h1>TOTAL: ${order[0].total}</h1>
            </div>
            <ul>
            {order.map((item) =>
            <li key={order.product_id}>
            <div className="product-image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="product-info">
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: {item.price * item.quantity}</p>
            </div>
            </li>)}
            </ul>
        </div>
)};

export default OrderScreen;