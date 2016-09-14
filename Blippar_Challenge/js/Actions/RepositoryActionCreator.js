import request from 'superagent';


export const REPO_GET = 'REPO_GET';
export const REPO_REQUEST = 'REPO_GET_REQUEST';
export const REPO_SUCCESS = 'REPO_GET_SUCCESS';
export const REPO_ERROR = 'REPO_GET_ERROR';
export const SELECT_REPO = 'SELECT_REPO';

 export function repoGet() {
      request.get('url')
  }

  export function selectRepo(repo){
    console.log("Clicked Repo", repo);
    return {
      type: "SELECT_REPO",
      payload: repo
    }
  }


/*
export function repoGET() {
  return {
    type: REPO_GET,
      //request.get('url'),
    }
  }

export function repoRequest(repo) {
  return {
    type: REPO_GET_REQUEST,
    payload: repo,
  }
}

export function repoSucess(repo) {
  return {
    type: REPO_GET_SUCCESS
  }
}

export function repoError(repo){
  return {
    type: REPO_GET_ERROR,
    payload: repo
  }
}

function requestRepo(url, callback, result = []) {
  request.get(" ")
  .end(function(err, res){
  });
}*/
