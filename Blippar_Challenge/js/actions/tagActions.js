import request from 'superagent';
import allreducers from '../reducers/all_reducers.js';
export const REQUEST_TAGS = 'REQUEST_TAGS';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const INVALIDATE_TAGS = 'INVALIDATE_TAGS';

export function requestTags(repo_id) {
  return {
    type: REQUEST_TAGS,
    fetch_repo: repo_id
    }
  }

  export function receiveTags(tags, repo_id) {
    return {
      type: RECEIVE_TAGS,
      tagsPayload: tags
    }
  }

  export function invalidateTags() {
    return {
      type: INVALIDATE_TAGS
    }
  }

  export function fetchTags(repo_id) {
    return function(dispatch) {
      dispatch(requestTags(repo_id));
      request.get(`${repo_id}/tags/list`)
              .then((response) => {
                    console.log("tags query", response.body);
                    dispatch(receiveTags(response.body.tags), repo_id);
              }, (error) => {
                    console.error("Failed!", error);
          });
      }
    }
