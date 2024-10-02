import { 
    FETCH_RESULTS_REQUEST, FETCH_RESULTS_SUCCESS, FETCH_RESULTS_FAILURE,
    LOGIN_SUCCESS, LOGOUT, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES 
  } from './actionTypes';
  
  const initialState = {
    loading: false,
    results: [],
    error: '',
    isAuthenticated: false,
    favorites: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_RESULTS_REQUEST:
        return { ...state, loading: true };
      case FETCH_RESULTS_SUCCESS:
        return { ...state, loading: false, results: action.payload };
      case FETCH_RESULTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case LOGIN_SUCCESS:
        return { ...state, isAuthenticated: true };
      case LOGOUT:
        return { ...state, isAuthenticated: false };
      case ADD_TO_FAVORITES:
        return { ...state, favorites: [...state.favorites, action.payload] };
      case REMOVE_FROM_FAVORITES:
        return { 
          ...state, 
          favorites: state.favorites.filter(item => item !== action.payload) 
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;