import axios from 'axios';
import { API_URL } from '../constants/urlConstants';
import { USER_EDIT_FAIL, USER_EDIT_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from '../constants/userConstants';


const login = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {email, password} });
    try {
        const { data } = await axios.post(`${API_URL}/login/password`, { username: email, password: password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    } catch (error) {
       dispatch({ type: USER_SIGNIN_FAIL, payload: error.message }); 
    }
}

const logout = () => async (dispatch) => {
    const { data } = await axios.post(`${API_URL}/logout`);
       dispatch({ type: USER_SIGNOUT_SUCCESS, payload: data });    
}

const userEdit = (id, email, password, firstName, lastName) => async (dispatch) => {
    dispatch ({ type: USER_EDIT_SUCCESS, payload: { id, email, password, firstName, lastName} });
    try {
        const { data } = await axios.put(`${API_URL}/users/${id}`, {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
        });
        dispatch({type: USER_EDIT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_EDIT_FAIL, payload: error.message });
    }
}

const signup = (email, password, firstName, lastName) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: {email, password, firstName, lastName} });
    try {
        const { data } = await axios.post(`${API_URL}/signup`, {
            email: email, 
            password: password,
            first_name: firstName,
            last_name: lastName,
         });
         dispatch({type: USER_SIGNUP_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
    }
}

export { login, logout, userEdit, signup };
