import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from "./components/app.js";
import allReducers from './reducers/all_reducers.js';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  allReducers,
  applyMiddleware(
    thunkMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('main')
);
