import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';

export const login = (credentials) => {
  return (dispatch) => {
    
    if (credentials.username === 'user' && credentials.password === 'password') {
      dispatch({ type: LOGIN_SUCCESS });
    }
  };
};

export const logout = () => {
  return { type: LOGOUT };
};