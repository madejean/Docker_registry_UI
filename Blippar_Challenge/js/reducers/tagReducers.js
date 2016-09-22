import {
  REQUEST_TAGS, RECEIVE_TAGS, INVALIDATE_TAGS, SELECT_TAGS
} from '../actions/tagActions.js';
import {
  REQUEST_REPO, RECEIVE_REPO, INVALIDATE_REPO, SELECT_REPO
} from '../actions/repoActions.js';

const initialState = {
  tagsPayload: {},
	isFetching: null,
  fetch_repo: null
}

function TagReducer(state=initialState, action){
  console.log("Reducer: ", state, action);
  switch(action.type) {
    case REQUEST_TAGS:
    /*update sate by creating a new object to copy props*/
      return Object.assign(
        {},
        state,
        {
          isFetching: true,
          fetch_repo: action.fetch_repo
        }
      );
    case RECEIVE_TAGS:
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          didInvalidate: false,
          items: action.tagsPayload,
        }
      );
  default:
    return state
  }
}

export default TagReducer;
