export default function (state=null, action) {
  switch(action.type) {
    case 'TAG_SELECTED':
    return action.payload
    break;
  }
  return state;
}
