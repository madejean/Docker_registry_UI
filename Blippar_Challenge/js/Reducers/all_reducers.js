import {combineReducers} from 'redux';
import RepoReducer from './reducerRepo.js';

const allReducers = combineReducers({
  repositories: RepoReducer
});

export default allReducers;
