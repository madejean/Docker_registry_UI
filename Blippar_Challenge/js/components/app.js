import React from 'react';
import ListRepo from '../containers/repoTable.js';
import FilterSeach from './searchBar.js';
import allReducers from '../reducers/all_reducers.js';

class Application extends React.Component {
  render() {
    var styles = {

    }
  return (
    <div style={styles}>
      <ListRepo />
    </div>
    )
  }
}

export default Application;
