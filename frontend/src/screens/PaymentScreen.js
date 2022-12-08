import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/checkoutSteps';



function PaymentScreen() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePayment({paymentMethod: paymentMethod}));
        navigate("/shipping/place-order");
    }



    return (
        <div className="form-container">
            <div className="checkout-header">
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            </div>
            <div className="form-content">
            <h1 className="payment-header">Payment</h1>
            <form onSubmit={submitHandler}>
                <section className="payment">
                    <input 
                        type="radio"
                        id="paymentmethod" 
                        name="paymentmethod" 
                        value="thoughts and prayers"
                         onChange={(e) => setPaymentMethod(e.target.value)} />
                        <label htmlFor="paymentmethod">thoughts and prayers</label>
                </section>
                <button type="submit">Continue</button>
            </form>
        </div>
    </div>
    )
};

export default PaymentScreen;