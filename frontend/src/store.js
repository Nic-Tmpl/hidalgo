import { configureStore  } from '@reduxjs/toolkit';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

const reducer = {
    productList: productListReducer,
    productDetails: productDetailsReducer,
}

const store = configureStore({
    reducer,
});

export default store;