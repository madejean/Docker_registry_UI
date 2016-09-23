import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List, ListItem} from 'material-ui/List';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import RepoList from '../components/repoList.js';
import TagList from '../components/tagList.js';
import TagInfoList from '../components/tagInfoList.js';
import TagVersion from '../components/dockerVersion.js';
import FilterSearch from '../components/searchBar.js';


export default class ListRepo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  };
  handleNestedListToggle(item) {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    return (
      <div>
          <List>
            <Subheader>Repositories List Items</Subheader>
            <ListItem
              primaryText="Repositories"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              //children={<FilterSearch />}
              initiallyOpen={true}
              primaryTogglesNestedList={false}
              nestedItems={[
                <table key={1}>
                  <tbody>
                    <TableRow>
                    <TableHeaderColumn>Repositories</TableHeaderColumn>
                    <TableHeaderColumn>Tags</TableHeaderColumn>
                    <TableHeaderColumn>Image ID</TableHeaderColumn>
                    <TableHeaderColumn>Created</TableHeaderColumn>
                    <TableHeaderColumn>Author</TableHeaderColumn>
                    <TableHeaderColumn>Docker version</TableHeaderColumn>
                    </TableRow>
                  <TableRow>
                    <TableRowColumn style={{verticalAlign:'top'}}><RepoList /></TableRowColumn>
                    <TableRowColumn style={{verticalAlign:'top'}}><TagList /></TableRowColumn>
                    <TableRowColumn style={{verticalAlign:'top'}}></TableRowColumn>
                    <TableRowColumn style={{verticalAlign:'top'}}></TableRowColumn>
                    <TableRowColumn style={{verticalAlign:'top'}}><TagInfoList /></TableRowColumn>
                    <TableRowColumn style={{verticalAlign:'top'}}></TableRowColumn>
                  </TableRow>
                  </tbody>
                </table>
              ]}
            />
          </List>
      </div>
    );
  }
}
