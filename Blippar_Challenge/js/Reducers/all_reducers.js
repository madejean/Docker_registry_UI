import {combineReducers} from 'redux';
import {showRepositories} from './repo_reducer.js';

const allReducers = combineReducers ({
  repositories: showRepositories
})

export default allReducers;
