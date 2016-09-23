import React from 'react';
import request from 'superagent';
import _ from 'lodash';
import allReducers from '../reducers/all_reducers.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectTag} from '../actions/tagActions.js';
import {selectRepo} from '../actions/repoActions.js';
import {fetchTagInfo} from '../actions/tagInfoActions.js';

class TagList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    if(!this.props.tags){
      return (<div>select a repository</div>);
    }
  var tags = _.map(this.props.tags, (tag, id) => {
      return <li key={id} onClick={()=>this.props.fetchTagInfo(tag)}>
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
    repository: state.repositories.item,
	   tags: state.tags.items
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
    fetchTagInfo
	}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(TagList);
