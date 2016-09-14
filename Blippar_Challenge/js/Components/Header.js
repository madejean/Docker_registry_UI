import React from 'react';

class Header extends React.Component {
  render() {
    var borderColor = '#e6e3e3';
    var styles = {
      header : {
        borderRadius: '3px',
        border: '1px solid ' + borderColor,
        height: '60px',
        marginLeft: '10px',
        padding: '0px 10px 0px 10px',
      },
  };

  return (
    <div style={styles.header}>
      <h1>Docker Registry</h1>
    </div>
    )
  }
}

export default Header;