import React, {useEffect, useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShipping } from '../actions/cartActions';



function ShippingScreen() {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping(address, city, country, postalCode));
    }



    return (
        error ? <div>{error}</div> :
        <div className="form-container">
            <div className="form-content">
            <h1>Shipping</h1>
            <form onSubmit={submitHandler}>
                <section>
                    <label htmlFor="address">Address: </label>
                    <input id="address" name="address" type="text" autoComplete="address" required onChange={(e) => setAddress(e.target.value)} />
                </section>
                <section>
                    <label htmlFor="city">City: </label>
                    <input id="city" name="city" type="text" required onChange={(e) => setCity(e.target.value)} />
                </section>
                <section>
                    <label htmlFor="country">Country: </label>
                    <input id="country" name="country" type="text" required onChange={(e) => setCountry(e.target.value)} />
                </section>
                <section>
                    <label htmlFor="postal-code">Postal Code: </label>
                    <input id="postal-code" name="postal-code" type="text" required onChange={(e) => setPostalCode(e.target.value)} />
                </section>
                <button type="submit">Continue</button>
            </form>
        </div>
    </div>
    )
};

export default ShippingScreen;