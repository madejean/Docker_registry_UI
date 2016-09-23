import React from 'react';
import request from 'superagent';
import _ from 'lodash';
import allReducers from '../reducers/all_reducers.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectTag} from '../actions/tagActions.js';
import {selectRepo} from '../actions/repoActions.js';

class TagInfoList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    if(!this.props.infos){
      return (<div>select a tag</div>);
    }
  var tagInfos = _.map(this.props.infos, (info, id) => {
      return
      <li key={id}>{info}</li>

    })
    return (
      <div>
        <ul key={tagInfos.id}>{tagInfos}</ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
	return {
	   infos: state.infos.items
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
	}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(TagInfoList);
