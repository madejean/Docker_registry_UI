import React from 'react';
import RepoList from '../components/repoList.js';
import TagList from '../components/tagList.js';
import TagDetails from '../components/tagDetails.js';

class Body extends React.Component {
  render() {
    var styles = {
      body : {
        height: '100%',
      },
      table : {
        width: '100%',
        textAlign: 'left',
        tableLayout: 'fixed',
        },
      td : {
        valign: 'middle',
        width: '360px',
      },
      td2 : {
        top: '150px',
        position: 'absolute',
      }
    }

   return (
    <div style={styles.body}>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.td}><RepoList /></td>
            <td style={styles.td2}><TagList /></td>
            <td style={styles.td}><TagDetails /></td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}
export default Body;
