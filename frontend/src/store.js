import { configureStore  } from '@reduxjs/toolkit';
import { productListReducer } from './reducers/productReducers';

const store = configureStore({
    reducer: {
        products: productListReducer,
    }
});

export default store;