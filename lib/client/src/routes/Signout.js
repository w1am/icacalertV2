import React from 'react';
import { Redirect } from 'react-router-dom';

const Signout = () => {
  localStorage.removeItem('token');
  return <Redirect to='/account' />
}

export default Signout;
