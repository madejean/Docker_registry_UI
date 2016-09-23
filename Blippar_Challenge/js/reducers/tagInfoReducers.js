import {
  REQUEST_TAG_INFO, RECEIVE_TAG_INFO, INVALIDATE_TAG_INFO
} from '../actions/tagInfoActions.js';
import {
  REQUEST_TAGS, RECEIVE_TAGS, INVALIDATE_TAGS, SELECT_TAGS
} from '../actions/tagActions.js';
import {
  REQUEST_REPO, RECEIVE_REPO, INVALIDATE_REPO, SELECT_REPO
} from '../actions/repoActions.js';

const initialState = {
  tagInfoPayload: {},
	isFetching: null,
  fetch_tag: null,
}

function TagInfoReducer(state=initialState, action){
  console.log("Reducer: ", state, action);
  switch(action.type) {
    case REQUEST_TAG_INFO:
    /*update sate by creating a new object to copy props*/
      return Object.assign(
        {},
        state,
        {
          isFetching: true,
          fetch_tag: action.fetch_tag
        }
      );
    case RECEIVE_TAG_INFO:
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          didInvalidate: false,
          items: action.tagInfoPayload,
        }
      );
  default:
    return state
  }
}

export default TagInfoReducer;
