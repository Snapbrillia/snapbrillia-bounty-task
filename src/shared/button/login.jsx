import '../css/buttonStyles.css';
import { useState, useEffect } from 'react';
import * as sessionApi from '../../api/session';
import { useAuth } from '../../context/authContext';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [send, setSend] = useState(false);
  const [expired, setExpired] = useState(false);
  const { login, auth, logout } = useAuth();
  const search = window.location.search;
  const token = new URLSearchParams(search).get('token');
  const tokenType = new URLSearchParams(search).get('stytch_token_type');
  const handleSubmit = async () => {
    if (!email) {
      return;
    }
    const data = await sessionApi.generateMagicLink(email);
    if (data) setSend(true);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      if (error.response.status === 401) {
        console.log('can not logout');
      }
    }
  };
  const handleLogin = async (token) => {
    if (!token || !tokenType) {
      return;
    }
    try {
      await login(token, tokenType);
    } catch (error) {
      if (error.response.status === 401) {
        console.log('token is expired');
      } else {
        console.log('error', error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      handleLogin(token);
    }
  }, [token]);
  return <>{expired & <h1>Token is expired</h1>}</>;
  // return <button className='btn-secondary'>Login</button>;
}
