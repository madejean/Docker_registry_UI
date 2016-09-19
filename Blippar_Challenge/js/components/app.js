import React from 'react';
import Header from '../containers/header.js';
import InfoBar from '../containers/infoBar.js';
import Body from '../containers/body.js';

class App extends React.Component {
  render() {
    var styles = {
        marginLeft: '10px',
        padding: '0px 10px 0px 10px',
    }
  return (
    <div style={styles}>
        <Header />
        <br />
        <InfoBar />
        <hr />
        <Body />
    </div>
    )
  }
}

export default App;
