import React from 'react';
import request from 'superagent';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectRepo} from '../actions/repoActions.js';
import {fetchTags} from '../actions/tagActions.js';


class RepoList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
  var repositories = _.map(this.props.repositories, (repo, id) => {
      return <li key={id} onClick={()=>this.props.fetchTags(repo)}>
        {repo}
      </li>;
    })
    return (
      <div>
        <ul key={repositories.id}>{repositories}</ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
	return {
	   repositories: state.repositories.items
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
    selectRepo,
    fetchTags
	}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(RepoList);
