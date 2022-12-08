import React, { useEffect } from 'react';
import '../App.css';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';




function CartScreen() {
    const [queryParams] = useSearchParams();
    const qty = Number(queryParams.get('quantity'));
    const { id } = useParams();
    const navigate = useNavigate();

    const cart = useSelector(store => store.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();


    useEffect(() => {
        if(id) {
            dispatch(addToCart(id, qty));
        }
    }, []);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const handleCheckout = () => {
        navigate("/shipping");
    }


    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>
                        <div>Price</div>
                    </li>
                    {
                        cartItems.length === 0 ?
                        <div> Cart is empty </div>
                        :
                        cartItems.map( item =>
                            <li key={item.product.id}>
                                <div className="cart-item-image">
                                    <img src={item.product.image} alt={item.product.name} />
                                </div>
                                <div className="cart-item-name">
                                    <Link to={`/products/${item.product.id}`}>{item.product.name}</Link>
                                    <div className="quantity">
                                        Qty:
                                        <input id="quantity" type="number" name="quantity" min="1" value={item.quantity} 
                                                onChange={(e) => dispatch(addToCart(item.product.id, e.target.value))}/>
                                    </div>
                                    <button onClick={(e) => handleRemoveFromCart(item.product)}>Delete</button>
                                </div>
                                <div className="cart-item-price">${item.product.price}</div>
                            </li>
                        )
                    }
                </ul>

            </div>
            <div className="cart-action">
                    <h3>
                        Subtotal: ${cartItems.reduce((total, current) => total + (current.product.price * current.quantity), 0)}
                    </h3>
                    <h3>
                    ({/*This needs to be fixed */cartItems.reduce((value, current) => value + current.quantity, 0)} items)
                    </h3>
                    <button onClick={handleCheckout} disabled={cartItems.length===0}>Checkout</button>

            </div>
        </div>

    )
}

export default CartScreen;