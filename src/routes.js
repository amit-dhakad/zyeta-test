import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SuccessMessage from './components/SuccessMessage';
import Details from './components/details';
import Home from './components/home';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact component={SuccessMessage} path="/success" />
          <Route exact component={Details} path="/details" />
          <Route exact component={Home} path="/" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
