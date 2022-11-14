import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function LoginScreen(props) {

    return (
       // loading ? <div>loading...</div> :
       // error ? <div>{error}</div> :
        <div className="login">
        <h1>Sign in</h1>
        <form action="/login/password" method="post">
            <section>
                <label for="username">Username</label>
                <input id="username" name="username" type="text" autocomplete="username" required autofocus />
            </section>
            <section>
                <label for="current-password">Password</label>
                <input id="current-password" name="password" type="password" autocomplete="current-password" required />
            </section>

            <button type="submit">Sign in</button>
        </form>
        <p className="help">Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
    );
};

export default LoginScreen;