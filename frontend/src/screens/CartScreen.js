import React, { useEffect } from 'react';
import '../App.css';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';



function CartScreen() {
    const [queryParams] = useSearchParams();
    const qty = Number(queryParams.get('quantity'));
    const { id } = useParams();
    const productId = Number.parseInt(id);
    const dispatch = useDispatch();

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, []);


    return (
        <div> Cart Screen</div>
    )
}

export default CartScreen;