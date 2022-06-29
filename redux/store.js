// import {createStore} from 'redux';
// import rootReducer from './reducers/rootReducer';

// const store = createStore(rootReducer);

// export default store;

import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/rootReducer';


export const store = createStore(
  reducers,
  compose(applyMiddleware(thunk)),
);


