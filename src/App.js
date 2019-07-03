import React, { Fragment, useState } from 'react';
import './App.css';

import About from './components/pages/About';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import User from './components/users/User';
import Users from './components/users/Users';

import GitHubState from './context/github/GitHubState';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [alert, setAlert] = useState(null);

  //Changes Alert 
  const handleSearchAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <GitHubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search handleSearchAlert={handleSearchAlert} />
                  <Users />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GitHubState>
  );
}

export default App;
