import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const login = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post('https://reqres.in/api/login', credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};