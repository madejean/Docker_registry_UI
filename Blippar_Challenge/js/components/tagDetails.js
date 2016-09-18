import React from 'react';
import request from 'superagent';
import _ from 'lodash';

class TagDetails extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
    var url = ``;
    request.get(url)
            .then( (response) => {
                  console.log(response.body);
                  this.setState({
                    details: response.body.history.v1Compatibility

                  })
            }, (error) => {
                  console.error("Failed!", error);
        });
  }
  render() {
    var details = _.map(this.state.details, (info, id) => {
      return <li key={id}>{info}</li>;
    })
    return (
      <div>
        <h2>Details</h2>
        <ul key={details.id}>{details}</ul>
      </div>
    )
  }
}

export default TagDetails;
