import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import data from '../../../backend/data';


function ProductScreen(props) {
    let { id } = useParams();
    const product = data.products.find(item => item.id == id); //Using truthy equivalence as the id variable is a string, not an int.
    return (
        <div className="product-details">
            <div className="details-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="details-info">
                <h1>{product.name}</h1>
                <h3>${product.price}</h3>
                <p>{product.rating} ({product.numReviews} Reviews)</p>
            </div>
            <div className="details-order">
                <p>Price: ${product.price}</p>
                <form id="quantity-form">
                    <label for="quantity">Qty: </label>
                    <input id="quantity" type="number" name="quantity" min="0" value="1"/><br/>
                </form>
                <button type="submit" form="quantity-form">Add to Cart</button>

            </div>
        </div>
    );
};

export default ProductScreen;