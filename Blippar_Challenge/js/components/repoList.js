import React from 'react';
import request from 'superagent';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectRepo} from '../actions/repoActions.js';

class RepoList extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    this.search();
  }
  updateSearch(){
    this.search(this.refs.query.value);
  }
  render() {
    var repositories = _.map(this.state.repositories, (repo, id) => {
      return <li key={id} onClick={()=>this.props.selectRepo(repo)}>
        {repo}
      </li>;
    })
    return (
      <div>
        <input ref="query" onChange={(e) => {this.updateSearch(); }} type="text"/>
        <ul key={repositories.id}>{repositories}</ul>
      </div>
    )
  }

  search(query=""){
    var url = ``;
    request.get(url)
            .then( (response) => {
                  console.log(response.body);
                  this.setState({
                    repositories: response.body.repositories
                  })
            }, (error) => {
                  console.error("Failed!", error);
        });
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectRepo: selectRepo}, dispatch);
}
export default connect(null, matchDispatchToProps)(RepoList);
