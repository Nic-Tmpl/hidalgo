import React, {useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/checkoutSteps';
import { makeOrder } from '../actions/orderActions';



function PlaceOrderScreen() {
    const navigate = useNavigate();

    const user = useSelector(store => store.userLogin);
    const { userInfo } = user;

    const cart = useSelector(store => store.cart);
    const { cartItems, shipping, payment } = cart;
    if (!shipping.address) {
        navigate("/shipping");
    } else if (!payment.paymentMethod) {
        navigate("/shipping/payment");
    }
    const dispatch = useDispatch();

    const cartTotal = cartItems.reduce((total, current) => total + (current.product.price * current.quantity), 0);

    const placeOrderHandler = () => {
        dispatch(makeOrder(userInfo.id, cartTotal, cartItems));
        navigate("/congrats");
    }


    return (
        <div className="order-form-container">
            <div className="checkout-header">
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            </div>
            <div className="placeorder">
                <div className="placeorder-info">
                    <div>
                        <h3>Shipping Address:</h3>
                    </div>
                <div>
                    {shipping.address}, {shipping.city}, {shipping.postalCode}, {shipping.country}
                </div>
                <div>
                    <h3>Payment Method:</h3>
                </div>
                    <div>
                        {payment.paymentMethod}
                    </div>
                    <div>
                        <h3>Order Summary:</h3>
                    </div>
                    <div>
                    {cartItems.reduce((value, current) => value + current.quantity, 0)} items
                    </div>
                    <div>
                        <h3>Total: </h3>
                    </div>
                    <div>
                    $ {cartTotal}
                    </div>
                <button onClick={placeOrderHandler}>Place Order</button>
                </div>
                <div className="order-list">
                    <ul className="cart-list-container">
                    {
                        cartItems.map( item =>
                            <li key={item.product.id}>
                                <div className="cart-item-image">
                                    <img src={item.product.image} alt={item.product.name} />
                                </div>
                                <div className="cart-item-name">{item.product.name}</div>
                                <div className="quantity">Qty:{item.quantity}</div>
                                <div className="cart-item-price">${item.product.price * item.quantity}</div>
                            </li>
                        )
                    }
                </ul>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrderScreen;