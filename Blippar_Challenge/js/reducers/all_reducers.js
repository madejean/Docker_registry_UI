import {combineReducers} from 'redux';
import RepoReducer from './repoReducers.js';
import TagReducer from './tagReducers.js';
import TagInfoReducer from './tagInfoReducers.js'

const allReducers = combineReducers ({
  repositories: RepoReducer,
  tags: TagReducer,
  infos: TagInfoReducer
})

export default allReducers;
