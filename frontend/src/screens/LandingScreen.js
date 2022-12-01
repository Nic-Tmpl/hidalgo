import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function LandingScreen() {

    const navigate = useNavigate();

    const redirectHandler = () => {
        navigate("/products");
    }

/* links to product categories are hard-coded in the <p> tags of this example for a few reasons:
    1). A landing page may not always need to mention categories, so including functionality (vias useState) seems like clutter.
    2). Some websites may not use multiple categories in the API.
    3). An example of categories being stored in state can be found in the AdminProductScreen.
    */
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
                you. For a price. No questions asked. That's the Hidalgo guarantee. So, is it <Link to='/products/categories/0'>shirts</Link> you're 
                looking for? <Link to="/products/categories/1">Pants</Link>? Or just <Link to="/products/categories/2">food</Link>?
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