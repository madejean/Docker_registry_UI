import React from 'react';
import RepoList from '../Containers/repo_list.js';
import RepoDetail from '../Containers/repo_details.js';

export default class Repos extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.repoGet();
  }

  render() {
    const{isFetching,repo,error} = this.props;
    return (
      <div>
        {error && <div>Couldnt get data</div>}
        {isFetching}
        {!error && repositories && <RepoList repositories:{repositories} />}
      </div>
    )
  }
}
