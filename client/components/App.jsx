import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
  render() {return (
    <MuiThemeProvider>
      <AppBar title='My AppBar' />
      <RaisedButton label='Default' />
    </MuiThemeProvider> 
    )}

}