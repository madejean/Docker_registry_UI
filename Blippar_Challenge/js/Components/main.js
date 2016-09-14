import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';

const App = props => (
	<div>
    	<Header />
    	<SearchBar />
    	<Content />
    	<Footer />
	</div>
);

export default App;
