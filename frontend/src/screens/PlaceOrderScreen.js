import React, {useEffect, useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/checkoutSteps';



function PlaceOrderScreen() {
    const [queryParams] = useSearchParams();
    const qty = Number(queryParams.get('quantity'));
    const { id } = useParams();
    const navigate = useNavigate();

    const cart = useSelector(store => store.cart);
    const { cartItems , shipping, payment } = cart;
    const dispatch = useDispatch();


    useEffect(() => {
        if(id) {
            dispatch(addToCart(id, qty));
            console.log('i fire once');
        }
    }, []);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const handleCheckout = () => {
        navigate("/shipping");
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
                    {cart.shipping.address}, {cart.shipping.city},
                    {cart.shipping.postalCode}, {cart.shippping.country}
                </div>
                <div>
                    <h3>Payment</h3>
                    <div>
                        {cart.payment.paymentMethod}
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
                    <h3>
                        Subtotal: ({cartItems.reduce((value, current) => value + current.quantity, 0)} items)
                        : $ {cartItems.reduce((total, current) => total + (current.product.price * current.quantity), 0)}
                    </h3>
                    <button onClick={handleCheckout} disabled={cartItems.length===0}>Checkout</button>

            </div>
        </div>
    </div>

    )
}

export default PlaceOrderScreen;