import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import data from '../data';


function ProductScreen(props) {
    let { id } = useParams();
    const product = data.products.find(item => item.id == id); //Using truthy equivalence as the id variable is a string, not an int.
    return (
        <div className="product-display">
        <div className="product-details">
            <div className="details-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="details-order">
                 <h1>{product.name}</h1>
                <p>Price: ${product.price}</p>
                <form id="quantity-form">
                    <label for="quantity">Qty: </label>
                    <input id="quantity" type="number" name="quantity" min="0" value="1"/><br/>
                </form>
                <button type="submit" form="quantity-form">Add to Cart</button>

            </div>
        </div>
        <div className="product-description">

            <p>A long winded description of the product goes here.</p>
            <p>It should cover multiple lines.</p>
            <p>{product.rating} ({product.numReviews} Reviews)</p>
        </div>
        </div>
    );
};

export default ProductScreen;