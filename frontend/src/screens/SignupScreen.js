import React, {useEffect, useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../actions/userActions';



function SignupScreen(props) {
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

    return (
        loading ? <div>loading...</div> :
        error ? <div>{error}</div> :
        <div className="form-container">
            <div className="form-content">
            <h1>Sign up</h1>
            <form onSubmit={submitHandler}>
                <section>
                    <label for="email">Email: </label>
                    <input id="email" name="email" type="email" autocomplete="email" required onChange={(e) => setEmail(e.target.value)} />
                </section>
                <section>
                    <label for="password">Password: </label>
                    <input id="password" name="password" type="password" autocomplete="new-password" required onChange={(e) => setPassword(e.target.value)}/>
                </section>
                <section>
                    <label for="firstName">First Name: </label>
                    <input id="firstName" name="firstName" type="text" autocomplete="firstName" required onChange={(e) => setFirstName(e.target.value)} />
                </section>
                <section>
                    <label for="lastName">Last Name: </label>
                    <input id="lastName" name="lastName" type="text" autocomplete="lastName" required onChange={(e) => setLastName(e.target.value)} />
                </section>
                <button type="submit">Sign up</button>
            </form>
            <p className="help">Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
    </div>
    )
};

export default SignupScreen;