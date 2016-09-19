import React from 'react';

class InfoBar extends React.Component {
  render() {
    var styles = {
      table : {
        width: '100%',
        textAlign: 'left',
      },
      th : {
        fontSize: '150%',
        width: '40%',
      }
    }

   return (
      <div>
        <table style={styles.table}>
        <tbody>
          <tr>
            <th style={styles.th}>Repositories</th>
            <th style={styles.th}>Tags</th>
            <th style={styles.th}>Info</th>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default InfoBar;
