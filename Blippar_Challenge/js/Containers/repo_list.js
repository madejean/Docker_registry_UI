import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectRepo} from '../Actions/RepositoryActionCreator.js';


class RepoList extends Component {
  createListItems() {
    return this.props.repositories.map((repo) => {
      return (
        <li key={repo.id}
        onClick={() => this.props.selectRepo(repo)}>
        {repo.repositories}
        </li>
      );
    });
  }
  render() {
    return(
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    repositories: state.repositories
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectRepo: selectRepo}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(RepoList);
