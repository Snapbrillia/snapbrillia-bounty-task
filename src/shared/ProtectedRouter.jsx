import React from 'react';
import { Redirect, useLocation } from '@reach/router';
import { useAuth } from '../context/authContext';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ component: Component, ...otherProps }) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth) {
    if (location.state && location.state.from && location.state.from.pathname) {
      toast('please login to continue', {toastId: 'login_route'});
      return <Redirect to={location.state.from.pathname} noThrow />;
    }
    return <Redirect to='/' noThrow />;
  }
  return <Component {...otherProps} />;
};

export default ProtectedRoute;
