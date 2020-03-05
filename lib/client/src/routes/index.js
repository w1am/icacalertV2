import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../utils/verifyUser';

import Dashboard from './Dashboard';
import Download from './Download';
import Account from './Account';
import Leaflet from './Leaflet';
import AlertPage from './AlertPage';
import DistrictPage from './DistrictPage';
import Login from './Login';
import Register from './Register';
import Signout from './Signout'
import Password from './Password'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={props => (
      isAuthenticated().ok ? ( 
        <Component {...props} />
      ) : (
        <Redirect
          to='/account/login/'
        />
      )
    )}
  />
)

export default () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/download' exact component={Download} />
    <Route path='/map' exact component={Leaflet} />
    <Route path='/account' exact component={Account} />
    <Route path='/alert' exact component={AlertPage} />
    <Route path='/account/login' exact component={Login} />
    <Route path='/account/register' exact component={Register} />
    <Route path='/account/signout' exact component={Signout} />
    <PrivateRoute path='/account/password' exact component={Password} />
    <Route path='/alerts/:dname' exact component={DistrictPage} />
  </Switch>
)
