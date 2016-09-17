import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import allReducers from './reducers/all_reducers.js';
import thunk from 'redux-thunk'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  (
  <Provider store={createStoreWithMiddleware(allReducers)}>
    <App />
  </Provider>
  ),
  document.getElementById('main')
);
