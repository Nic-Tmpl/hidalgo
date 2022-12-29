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
   const [orderId, setOrderId] = useState(id);
   const [orderStatus, setOrderStatus] = useState('');
   const [orderTotal, setOrderTotal] = useState(0.00);


   const dispatch = useDispatch();

   useEffect(() => {
    console.log(id);
    dispatch(detailsOrder(id, userId));
   }, [orderDetails]);

   if (order !== undefined) {
    setOrderId(order[0].id);
    setOrderStatus(order[0].status);
    setOrderTotal(order[0].total);
   };


    return (
        loading ? <div>loading...</div> :
        error ? <div>{error}</div> :
        <div className="form-container-2">
        <div className="placeorder">
            <div className="placeorder-info">
                <h1>Order Info</h1>
                <h3>ORDER ID: </h3>
                <p>{orderId}</p>
                <h3>STATUS: </h3> 
                <p>{orderStatus}</p>
                <h3>TOTAL: </h3>
                <p>${orderTotal}</p>
            </div>
            <div className="order-list">
            <ul className="cart-list-container">
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
        </div>
    </div>
)};

export default OrderScreen;