import React from 'react';
import RepoList from '../Containers/repo_list.js';
//import RepoDetails from '../Containers/repo_details.js';

  const Repo = () => (
    <div>
      <h2>Repo List</h2>
      <RepoList />
      <hr/>
    //  <h2>Repo Details</h2>
      //<RepoDetails />
    </div>
  );

export default Repo;

/*export default class Repos extends React.Component {
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
}*/
