import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Application from "./components/app.js";
import {fetchRepo} from './actions/repoActions.js';
import {fetchTags} from './actions/tagActions.js';
import allReducers from './reducers/all_reducers.js';

const store = createStore(
  allReducers,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(fetchRepo())
store.dispatch(fetchTags())

const App = () => (
 <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Application />
 </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('main')
);
