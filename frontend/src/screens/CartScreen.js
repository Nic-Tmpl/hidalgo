import React from 'react';
import '../App.css';
import { useParams, useSearchParams } from 'react-router-dom';



function CartScreen() {
    const [queryParams] = useSearchParams();
    const qty = queryParams.get('quantity');
    const { id } = useParams();

    return (
        <div> Cart Screen</div>
    )
}

export default CartScreen;