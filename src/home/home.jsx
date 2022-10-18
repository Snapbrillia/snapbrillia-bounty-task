import React, { useContext, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { navigate } from '@reach/router';

const Home = () => {
  const { user } = useAuth();
  return <div>{user ? <h1>You are in</h1> : <h1>You are out</h1>}</div>;
};
export default Home;
