import React from 'react';
import './App.css';
import Login from './Containers/login/login'
import SecureRoute from './API/SecureRoute'
import MainLayout from './Containers/MainLayout/MainLayout'

import {HashRouter as Router, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    // this is the login page the user needs to pass through this to go into the app

      <React.Fragment>
        <Router>
        <Redirect to="/Login" />
        <Redirect from="/" to="/Login" />
          <Route exact path="/Login" component={Login}></Route>
          <SecureRoute path="/User" component={MainLayout}>
          </SecureRoute>
        <Route path="/Error" render={()=>
          <p>Error</p>
        }></Route>
        </Router>
      </React.Fragment>
  );
}

export default App;
