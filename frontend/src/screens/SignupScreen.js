import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function SignupScreen(props) {

    return (
        <div className="form-container">
            <div className="form-content">
            <h1>Sign up</h1>
            <form action="/signup" method="post">
                <section>
                    <label for="email">Email: </label>
                    <input id="email" name="email" type="email" autocomplete="email" required />
                </section>
                <section>
                    <label for="new-password">Password: </label>
                    <input id="new-password" name="password" type="password" autocomplete="new-password" required />
                </section>
                <section>
                    <label for="first_name">First Name: </label>
                    <input id="first_name" name="first_name" type="text" autocomplete="first_name" required />
                </section>
                <section>
                    <label for="last_name">Last Name: </label>
                    <input id="last_name" name="last_name" type="text" autocomplete="last_name" required />
                </section>
                <button type="submit">Sign up</button>
            </form>
            <p className="help">Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
    </div>
    )
};

export default SignupScreen;