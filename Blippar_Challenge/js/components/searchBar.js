import React, { PropTypes } from 'react';
import Search from 'react-search'
import {connect} from 'react-redux';
import RepoList from './repoList.js';

class FilterSearch extends React.Component {
  render() {
    let ITEMS = this.props.repositories
  return (
    <div>
      <Search items={ITEMS} placeholder='search repositories' />
    </div>
    )
  }
}
function mapStateToProps(state) {
	return {
	   repositories: state.repositories.items
	};
}

export default connect(mapStateToProps, null)(FilterSearch);
