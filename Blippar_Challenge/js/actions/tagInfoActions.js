import request from 'superagent';
import allreducers from '../reducers/all_reducers.js';
export const REQUEST_TAG_INFO = 'REQUEST_TAG_INFO';
export const RECEIVE_TAG_INFO = 'RECEIVE_TAG_INFO';
export const INVALIDATE_TAG_INFO = 'INVALIDATE_TAG_INFO';

export function requestTagInfo(tag_id) {
  return {
    type: REQUEST_TAG_INFO,
    fetchtag: tag_id
    }
  }

  export function receiveTagInfo(details, tag_id) {
    return {
      type: RECEIVE_TAG_INFO,
      tagInfoPayload: details
    }
  }

  export function invalidateTagInfo() {
    return {
      type: INVALIDATE_TAG_INFO
    }
  }

  export function fetchTagInfo(tag_id) {
    return function(dispatch) {
      dispatch(requestTagInfo(tag_id));
      request.get(`https://docker-cors.dev.blippar.com/v2/${tag_id}`)
              .then((response) => {
                    console.log("tags info query", response.body);
                    dispatch(receiveTagInfo(response.body.history), tag_id);
              }, (error) => {
                    console.error("Failed!", error);
          });
      }
    }
