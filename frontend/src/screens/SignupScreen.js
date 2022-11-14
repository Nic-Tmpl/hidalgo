import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function SignupScreen(props) {

    return (
        <div className="signup">
        <h1>Sign up</h1>
        <form action="/signup" method="post">
            <section>
                <label for="username">Username</label>
                <input id="username" name="username" type="text" autocomplete="username" required />
            </section>
            <section>
                <label for="new-password">Password</label>
                <input id="new-password" name="password" type="password" autocomplete="new-password" required />
            </section>
            <section>
                <label for="first_name">First Name</label>
                <input id="first_name" name="first_name" type="text" autocomplete="first_name" required />
            </section>
            <section>
                <label for="last_name">Last Name</label>
                <input id="last_name" name="last_name" type="text" autocomplete="last_name" required />
            </section>
            <button type="submit">Sign up</button>
        </form>
        <p className="help">Already have an account? <Link to="/login">Sign in</Link></p>
    </div>
    )
};

export default SignupScreen;