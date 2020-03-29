import React from 'react';
import './App.css';
import Login from './login/login'
import LandingPage from './Landing_Page/LandingPage'

import {HashRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    // this is the login page the user needs to pass through this to go into the app
    <React.Fragment>
      <Router>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/Home" component={LandingPage}></Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
