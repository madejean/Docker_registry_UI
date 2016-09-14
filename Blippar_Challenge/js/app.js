import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import {createStore, applyMiddleware} from 'redux';
import allReducers from './Reducers'
import App from './Components/Body.js';
import {repoGet} from './Actions/RepositoryActionCreator.js';

const store = createStore(
  allReducers,
  applyMiddleware(
    thunkMiddleware,
  )
);

store.dispatch(repoGet());

ReactDOM.render(
  (
  <Provider store={store}>
    <App />
  </Provider>
  ),
document.getElementById('main')
);
