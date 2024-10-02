import axios from 'axios';
import { FETCH_RESULTS_REQUEST, FETCH_RESULTS_SUCCESS, FETCH_RESULTS_FAILURE } from './actionTypes';

export const fetchResults = (query) => {
  return (dispatch) => {
    dispatch({ type: FETCH_RESULTS_REQUEST });
    axios.get(`https://www.googleapis.com/customsearch/v1?q=${query}&key=YOUR_API_KEY`)
      .then(response => {
        dispatch({ type: FETCH_RESULTS_SUCCESS, payload: response.data.items });
      })
      .catch(error => {
        dispatch({ type: FETCH_RESULTS_FAILURE, payload: error.message });
      });
  };
};