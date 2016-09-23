import request from 'superagent';

export const REQUEST_REPO = 'REQUEST_REPO';
export const RECEIVE_REPO = 'RECEIVE_REPO';
export const INVALIDATE_REPO = 'INVALIDATE_REPO';
export const SELECT_REPO = 'SELECT_REPO';

export function requestRepo() {
  return {
    type: REQUEST_REPO
    }
  }

  export function receiveRepo(repos) {
    return {
      type: RECEIVE_REPO,
      payload: repos,
    }
  }

  export function invalidateRepo() {
    return {
      type: INVALIDATE_REPO
    }
  }
  export function selectRepo(repos){
    console.log("You clicked on repository: ", repos);
    return {
      type: SELECT_REPO,
      repo_id: repo
    }
  }

  export function fetchRepo() {
    return function(dispatch) {
      dispatch(requestRepo());
      request.get(`https://docker-cors.dev.blippar.com/v2/_catalog?n=&last=`)
              .then((response) => {
                    console.log("this repositories", response.body);
                    dispatch(receiveRepo(response.body.repositories));
              }, (error) => {
                    console.error("Failed!", error);
          });
      }
    }
