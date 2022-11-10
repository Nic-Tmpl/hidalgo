import { configureStore  } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

const reducer = {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
}

const store = configureStore({
    reducer,
});

export default store;