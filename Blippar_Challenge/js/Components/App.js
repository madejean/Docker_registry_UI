import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { showRepositories } from '../actions/actioncreator.js';

class App extends React.Component {
  componentWillMount(){
    this.props.showRepositories()
  }

  renderRepoList() {
    return this.props.repositories.map((repo) => {
      return (
        <li key={repo.id} /*onClick={() => this.props.selectRepo(repo)}*/>
          {repo.name}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Repositories List</h2>
        <ul>
          {this.renderRepoList()}
        </ul>
      </div>
    );
  }

  }

  function mapStateToProps(state){
    return {
      repositories: state.repositories.list
    }
  }
  export default connect(mapStateToProps, {showRepositories})(App)
