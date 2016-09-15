import { REQUEST_REPO, RECEIVE_REPO, INVALIDATE_REPO, SELECT_REPO } from '../Actions/RepositoryActionCreator.js'

export default function RepoReducer(state={}, action){
  console.log("Reducer: ", state, action);
  switch(action.type) {
    case REQUEST_REPO:
    /*update sate by creating a new object to copy props*/
      return Object.assign(
        {},
        state,
        {
          isFetching: true,
          didInvalidate: false,
        }
      );
    case RECEIVE_REPO:
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          didInvalidate: false,
          items: action.payload,
          receivedAt: Date.now()
        }
      );
    case INVALIDATE_REPO:
      return Object.assign(
        {},
        state,
        {
          error: action.error,
          isFetching: false,
        }
      );
      case SELECT_REPO:
        return Object.assign(
          {},
          state,
          {
            isFetching: false,
            didInvalidate: false,
            items: action.payload,
            receivedAt: Date.now()
          }
        );//action.payload

  default:
    return state
  }
}
