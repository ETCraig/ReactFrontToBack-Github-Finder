import React, { Fragment } from 'react';
import './App.css';

import About from './components/pages/About';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import User from './components/users/User';
import Users from './components/users/Users';

import GitHubState from './context/github/GitHubState';
import AlertState from './context/alert/AlertState';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" render={props => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
}

export default App;
