import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';


function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userLogin = useSelector(store => store.userLogin);
    const { loading, userInfo, error} = userLogin;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
           navigate('/');
        }
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    /* Will need to bild an error message modal - currently errors will either "take over" the screen, or will not be seen. */
    return (
        loading ? <div>loading...</div> :
        <div className="form-container">
            <div className="form-content">
        <h1>Sign in</h1>
        <form onSubmit={submitHandler}>
            <section>
                <label htmlFor="email">Email: </label>
                <input id="email" name="email" type="email" autoComplete="email" required autoFocus onChange={(e) => setEmail(e.target.value)} />
            </section>
            <section>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required onChange={(e)=> setPassword(e.target.value)} />
            </section>
            <button type="submit">Sign in</button>
        </form>
        <p className="help">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    </div>
    );
};

export default LoginScreen;