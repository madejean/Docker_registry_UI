import React from 'react';
import RepoList from './repoList.js';
import TagList from './tagList.js';
import TagDetails from './tagDetails.js'

const App = () => (
    <div>
        <h1>Repositories List</h1>
        <hr />
        <RepoList />
        <hr />
        <h2>Repository Details</h2>
        <TagList />
        <hr />
        <TagDetails />
    </div>
);

export default App;
