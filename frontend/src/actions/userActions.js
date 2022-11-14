import axios from 'axios';
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstants';


const login = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try {
        const { data } = await axios.post("/login/password", {email, password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
    } catch (error) {
       dispatch({ type: USER_SIGNIN_FAIL, payload: error.message }); 
    }
}

export { login };
