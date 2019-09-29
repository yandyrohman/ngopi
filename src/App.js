import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Admin from './pages/Admin';

export default class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Route exact path="/">Under Construction..</Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </React.Fragment>
    );
  }
}
