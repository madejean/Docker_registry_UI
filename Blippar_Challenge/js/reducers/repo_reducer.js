import {SHOW_REPOSITORIES} from '../actions/actioncreator.js';

const initialState = {
  list:[]
}

export function showRepositories(state=initialState, action) {
  switch (action.type) {
    case SHOW_REPOSITORIES:
      return Object.assign({}, state, {list:action.payload})
    default:
      return state
  }
}
