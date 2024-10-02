import { fetchCoffeeStart, fetchCoffeeSuccess, fetchCoffeeFailure, setSortOrder } from './reducers';

export const fetchCoffee = (sortOrder = 'asc') => {
  return async (dispatch) => {
    dispatch(fetchCoffeeStart());
    try {
      const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=${sortOrder}`);
      const data = await response.json();
      dispatch(fetchCoffeeSuccess(data.data));
    } catch (error) {
      dispatch(fetchCoffeeFailure(error.message));
    }
  };
};

export const changeSortOrder = (order) => {
  return (dispatch) => {
    dispatch(setSortOrder(order));
    dispatch(fetchCoffee(order));
  };
};