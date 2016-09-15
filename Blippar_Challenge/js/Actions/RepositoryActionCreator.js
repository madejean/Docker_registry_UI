import request from 'superagent';
import fetch from 'isomorphic-fetch';
import 'babel-polyfill';

export const REQUEST_REPO = 'REQUEST_REPO';
export const RECEIVE_REPO = 'RECEIVE_REPO';
export const INVALIDATE_REPO = 'INVALIDATE_REPO';
export const SELECT_REPO = 'SELECT_REPO';

export function requestRepo(repo) {
  return {
    type: REQUEST_REPO,
    payload: repo,
    }
  }

  export function receiveRepo(repo) {
    return {
      type: RECEIVE_REPO,
      payload: repo,
      repo: json.data.children.map(child => child.data),
      receivedAt: Date.now()
    }
  }

  export function invalidateRepo(repo) {
    return {
      type: INVALIDATE_REPO,
      payload: repo
    }
  }

  export function selectRepo(repo){
    console.log("Action select repo");
    return {
      type: SELECT_REPO,
      payload: repo
    }
  }

  function fetchRepo(repo) {
    return dispatch => {
      dispatch(requestRepo(repo))
      return fetch(`https://docker.blippar.com/v2/_catalog?n=&last=${repo}.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveRepo(repo, json))
      )
    }
  }
