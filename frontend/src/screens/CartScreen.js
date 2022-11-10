import React, { useEffect } from 'react';
import '../App.css';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';




function CartScreen() {
    const [queryParams] = useSearchParams();
    const qty = Number(queryParams.get('quantity'));
    const { id } = useParams();
    const productId = Number.parseInt(id);

    const cart = useSelector(store => store.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();


    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
            console.log('i fire once');
        }
    }, []);


    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>
                        <div> Price

                        </div>
                    </li>
                    {
                        cartItems.length === 0 ?
                        <div> Cart is empty </div>
                        :
                        cartItems.map( item =>
                            <div>
                                <img src={item.product.image} alt={item.product.name} />
                                <div className="item-name">{item.name}</div>
                                <div>Qty: {item.quantity}</div>
                                <div>Price: {item.product.price}</div>
                            </div>
                        )
                    }
                </ul>

            </div>
            <div className="cart-action">
                    <h3>
                        Subtotal: ({cartItems.reduce((value, current) => value + current.quantity, 0)} items)
                        : $ {cartItems.reduce((total, current) => total + (current.product.price * current.quantity), 0)}
                    </h3>
                    <button disabled={cartItems.length===0}>Checkout</button>

            </div>
        </div>

    )
}

export default CartScreen;