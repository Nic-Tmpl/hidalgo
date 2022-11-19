import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function LandingScreen() {

    const navigate = useNavigate();

    const redirectHandler = () => {
        navigate("/products");
    }


    return (
    <div className="landing">
        <div className="background">
            <div className="jumbotron">
             <h1>Hidalgo</h1>
            </div>
        </div>
        <div className="about">
            <p>You ever get hungry? We get hungry all the time. You ever look at some guy, wearing some nice shirt or a fine pair
                of chinos, and you want one for yourself? It would be too weird to ask a strange man about his clothing. We know. But here
                at Hidalgo, we'll load you up with food and if you spot some shirt you like, we'll rip it right off the guy and give it to
                you. For a price. No questions asked. That's the Hidalgo guarantee. So, is it <Link to='/products'>shirts</Link> you're 
                looking for? <Link to="/products">Pants</Link>? Or just <Link to="/products">food</Link>?
            </p>
        </div>
        <div className="productBackground">
            <div className="productBar">
                <button onClick={redirectHandler}>SHOP ALL PRODUCTS</button>
            </div>
        </div>
     </div>
    )}

export default LandingScreen;