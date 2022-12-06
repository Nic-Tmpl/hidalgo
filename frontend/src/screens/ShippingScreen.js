import React, {useEffect, useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from '../actions/userActions';



function ShippingScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const userSignup = useSelector(store => store.userSignup);
    const { loading, userInfo, error} = userSignup;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signup(email, password, firstName, lastName));
    }

    useEffect(() => {
        if (userInfo) {
            dispatch(login(email, password));
            navigate('/');
        }
    })



    return (
        error ? <div>{error}</div> :
        <div className="form-container">
            <div className="form-content">
            <h1>Shipping</h1>
            <form onSubmit={submitHandler}>
                <section>
                    <label htmlFor="email">Email: </label>
                    <input id="email" name="email" type="email" autoComplete="email" required onChange={(e) => setEmail(e.target.value)} />
                </section>
                <section>
                    <label htmlFor="password">Password: </label>
                    <input id="password" name="password" type="password" autoComplete="new-password" required onChange={(e) => setPassword(e.target.value)}/>
                </section>
                <section>
                    <label htmlFor="firstName">First Name: </label>
                    <input id="firstName" name="firstName" type="text" autoComplete="firstName" required onChange={(e) => setFirstName(e.target.value)} />
                </section>
                <section>
                    <label htmlFor="lastName">Last Name: </label>
                    <input id="lastName" name="lastName" type="text" autoComplete="lastName" required onChange={(e) => setLastName(e.target.value)} />
                </section>
                <button type="submit">Sign up</button>
            </form>
            <p className="help">Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
    </div>
    )
};

export default ShippingScreen;