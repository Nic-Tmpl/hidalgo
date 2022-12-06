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
        dispatch(savePayment(paymentMethod));
        navigate("/shipping/payment");
    }



    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <div className="form-container">
            <div className="form-content">
            <h1>Payment</h1>
            <form onSubmit={submitHandler}>
                <section>
                    <label htmlFor="payment">Payment Method: </label>
                    <input id="payment" name="thoughts and prayers" type="radio" required onChange={(e) => setPaymentMethod(e.target.value)} />
                </section>
                <button type="submit">Continue</button>
            </form>
        </div>
    </div>
    </div>
    )
};

export default PaymentScreen;