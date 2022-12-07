import React, {useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/checkoutSteps';



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
    // dispatch = useDispatch();

    const cartTotal = cartItems.reduce((total, current) => total + (current.product.price * current.quantity), 0);

    const placeOrderHandler = () => {
        //dispatch order action
        console.log(cartItems);
        console.log(userInfo.id);
        console.log(cartTotal)
        navigate("/congrats");
    }


    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="placeorder">
                <div className="placeorder-info">
                    <div>
                        <h3>Shipping</h3>
                    </div>
                <div>
                    {shipping.address}, {shipping.city},
                    {shipping.postalCode}, {shipping.country}
                </div>
                <div>
                    <h3>Payment</h3>
                    <div>
                        {payment.paymentMethod}
                    </div>
                </div>
                    <ul>
                    {
                        cartItems.map( item =>
                            <li key={item.product.id}>
                                <div className="cart-item-image">
                                    <img src={item.product.image} alt={item.product.name} />
                                </div>
                                <div className="cart-item-name">{item.product.name}</div>
                                <div className="quantity">Qty:{item.quantity}</div>
                                <div className="cart-item-price">${item.product.price}</div>
                            </li>
                        )
                    }
                </ul>

            </div>
            <div className="placeorder-action">
                <button onClick={placeOrderHandler}>Place Order</button>
                <ul>
                    <li>
                        <h3>Order Summary</h3>
                    </li>
                    <li>
                    {cartItems.reduce((value, current) => value + current.quantity, 0)} items
                    </li>
                    <li>
                    $ {cartTotal}
                    </li>
                </ul>
            </div>
        </div>
    </div>

    )
}

export default PlaceOrderScreen;