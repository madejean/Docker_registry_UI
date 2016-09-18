import {combineReducers} from 'redux';
import RepoReducer from './repo_reducer.js';
import TagReducer from './tag_reducer.js';

const allReducers = combineReducers ({
  repositories: RepoReducer,
  tags: TagReducer
})

export default allReducers;
