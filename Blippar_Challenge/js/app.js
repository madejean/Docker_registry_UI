import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './Reducers/all_reducers'
import Repo from './Components/Repo.js';
import {selectRepo, fetchRepo} from './Actions/RepositoryActionCreator.js';

const store = createStore(
  allReducers,
  applyMiddleware(
    thunkMiddleware,
  )
);

store.dispatch(selectRepo())
store.dispatch(fetchRepo())

ReactDOM.render(
  (
  <Provider store={store}>
    <Repo />
  </Provider>
  ),
document.getElementById('main')
);
