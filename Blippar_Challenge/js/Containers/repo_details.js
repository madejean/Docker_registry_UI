import React, {Component} from 'react';
import {connect} from 'react-redux';

class RepoDetails extends Component {
  render() {
    return(
      <div>
        <h2>{this.props.repo.repositories}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    repositories: state.activeRepo
  };
}

export default connect(mapStateToProps)(RepoDetails);
