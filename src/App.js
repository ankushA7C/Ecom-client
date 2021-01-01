import React from 'react';
import './App.css';
import Login from './routes/user/login/index'
import SignUp from './routes/user/SignUp/index'
import AppLayout from './layouts/App Layout/index'
import SecureRoute from './security/SecureRoute'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

function App(props) {
  return (
    <>
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      <Route exact path="/sign-up" render={(props) => <SignUp {...props} />} />
      <SecureRoute path="/app" component={AppLayout} />
    </>
  );
}

export default withRouter(App);