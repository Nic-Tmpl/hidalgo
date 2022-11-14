import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/userActions';


function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userLogin = useSelector(store => store.useLogin);
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


    return (
       // loading ? <div>loading...</div> :
       // error ? <div>{error}</div> :
        <div className="form-container">
            <div className="form-content">
        <h1>Sign in</h1>
        <form onSubmit={submitHandler}>
            <section>
                <label for="email">Email: </label>
                <input id="email" name="email" type="email" autocomplete="email" required autofocus onChange={((e) => setEmail(e.target.value))} />
            </section>
            <section>
                <label for="current-password">Password</label>
                <input id="current-password" name="password" type="password" autocomplete="current-password" required onChange={((e) => setPassword(e.tarrget.value))} />
            </section>

            <button type="submit">Sign in</button>
        </form>
        <p className="help">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    </div>
    );
};

export default LoginScreen;