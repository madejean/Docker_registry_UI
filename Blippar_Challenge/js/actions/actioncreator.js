import axios from 'axios';

export const SHOW_REPOSITORIES = 'SHOW_REPOSITORIES'

export function showRepositories() {
  var url = `https://docker-cors.dev.blippar.com/v2/_catalog?n=&last=`
  return(dispatch, getState) => {
    axios.get(url)
          .then( (response) => {
                dispatch({type:SHOW_REPOSITORIES, payload: response.data})
                console.log(response.data);
          }, (error) => {
                console.error("Failed!", error);
      });
    }
}
