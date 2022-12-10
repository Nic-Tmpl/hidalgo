import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';




function CongratsScreen() {

    const navigate = useNavigate();

    const redirectHandler =() => {
        navigate("/");
    }
    return (
        <div className="congrats">
            <div className="congrats-content">
                <h1>Congrats!!!</h1>
                <p>Your order has been placed!</p>
                <button onClick={redirectHandler}>Home</button>
            </div>
        </div>
    )
};

export default CongratsScreen;