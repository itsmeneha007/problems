import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';


const actionTypeLogger = (store) => (next) => (action) => {
  console.log('Action Type:', action.type);
  return next(action);
};


const payloadLogger = (store) => (next) => (action) => {
  console.log('Payload:', action.payload);
  return next(action);
};


const store = createStore(
  rootReducer,
  applyMiddleware(actionTypeLogger, payloadLogger)
);

export default store;