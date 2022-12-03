import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL } from "../constants/productConstants"
import axios from 'axios';

const listProducts = (category) =>  async (dispatch) => {
    if (category) {
        try{
            dispatch({ type: PRODUCT_LIST_REQUEST });
            const { data } = await axios.get(`/products/categories/${category}`);
            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
        }
        catch(error) {
            dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
        }
    } else {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST}); 
        const { data } = await axios.get("/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }
    catch(error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message});
    }
    }
}

const saveProduct = (product) => async (dispatch) => {
    if (product.id) {
        try {
            dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product});
            const { data } = await axios.put('/products', product);
            dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
        } catch(error) {
            dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message});
    
        }   
    } else {
        try {
            dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product});
            const { data } = await axios.post('/products', product);
            dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
        } catch(error) {
            dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message});

        }   
    }
}

const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST, payload: id});
        const { data } = await axios.delete(`/products/${id}`);
        dispatch ({ type: PRODUCT_DELETE_SUCCESS, payload: data });
    } catch(error) {
        dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message});
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await axios.get(`/products/${productId}`);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } 
    catch(error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message});
    }
}

export { listProducts, saveProduct, deleteProduct, detailsProduct };