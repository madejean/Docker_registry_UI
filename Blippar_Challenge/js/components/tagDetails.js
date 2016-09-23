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
                    details: response.body.history

                  })
            }, (error) => {
                  console.error("Failed!", error);
        });
  }
  render() {
    console.log("render tag details", this.state);
    var details = _.map(this.state.details, (info, id) => {
      return <li key={id}>{JSON.parse(info.v1Compatibility).author}</li>;
    })
    return (
      <div>
        <ul key={details.id}>{details}</ul>
      </div>
    )
  }
}

export default TagDetails;
