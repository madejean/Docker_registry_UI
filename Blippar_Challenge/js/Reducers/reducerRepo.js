import { REPO_GET_REQUEST, REPO_GET_SUCCESS, REPO_GET_ERROR } from '../Actions/RepositoryActionCreator.js'

export default function RepoReducer(state={isFetching: false, repos:[], error: null}, action){
  switch(action.type) {
    case REPO_GET_REQUEST:
    /*update sate by creating a new object to copy props*/
      return Object.assign(
        {},
        {isFetching: true}
      );
    case REPO_GET_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          error: false,
          repos: action.repos,
        }
      );
    case REPO_GET_ERROR:
      return Object.assign(
        {},
        state,
        {
          error: action.error,
          isFetching: false,
        }
      );

  default:
    return state
  }
}
