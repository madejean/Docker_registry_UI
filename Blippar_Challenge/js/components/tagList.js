import React from 'react';
import request from 'superagent';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectTag} from '../actions/tagActions.js';
import {selectRepo} from '../actions/repoActions.js';
import allReducers from '../reducers/all_reducers.js';

class TagList extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    //var query = this.props.activerepo;
    var url = ``;
    console.log("this", url);
    request.get(url)
            .then( (response) => {
                  console.log(response.body);
                  this.setState({
                    tags: response.body.tags
                  })
            }, (error) => {
                  console.error("Failed!", error);
        });
      }
  render() {
    if (!this.props.repo) {
      return (<h4>select repo</h4>);
    }
    var tags = _.map(this.state.tags, (tag, id) => {
      return <li key={id} onClick={()=>this.props.selectTag(tag)} >
        {tag}
        </li>;
    })
    return (
      <div>
        <ul key={tags.id}>{tags}</ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    repo: state.repositories,
    activerepo: state.RepoReducer
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectTag: selectTag
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(TagList);
