import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from 'react';
import { navigate } from '@reach/router';
import { toast } from 'react-toastify';
import * as sessionAPI from '../api/session';
import * as candidateAPI from '../api/bountyCandidates';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);

  const login = (token, tokenType) => {
    setLoading(true);
    sessionAPI
      .loginWithMagicToken(token, tokenType)
      .then(({ user, bountyCandidate, company }) => {
        setAuth({ user: bountyCandidate });
        navigate('/bounties');
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const logout = () => {
    sessionAPI.logout().then((user) => {
      setAuth(undefined);
    });
  };

  const getUserInfo = () => {
    sessionAPI
      .getCurrentUser()
      .then(({ user, bountyCandidate, company }) => {
        setAuth({ user: bountyCandidate });
      })
      .catch((_error) => {})
      .finally(() => setLoadingInitial(false));
  };

  function linkAccount(token, tokenType, redirect) {
    setLoading(true);
    return sessionAPI
      .linkAccount(token, tokenType)
      .then(({ user, bountyCandidate, company }) => {
        setAuth({ user: bountyCandidate });
        if (redirect) {
          navigate(redirect);
        }
      })
      .catch((error) => {
        toast(error.error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }

  function updateProfile(values) {
    setLoading(true);
    candidateAPI
      .editProfile(values)
      .then((data) => {
        toast('Profile updated');
        getUserInfo();
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }
  function generateTwoFactor(callback) {
    setLoading(true);
    candidateAPI
      .generateTwoFactor()
      .then((data) => {
        if (callback) {
          callback(data);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }
  function sendTotp(callback) {
    setLoading(true);
    candidateAPI
      .sendTotp()
      .then((data) => {
        if (callback) {
          callback(data);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }
  function disableTwoFactor(callback) {
    setLoading(true);
    candidateAPI
      .disableTwoFactor()
      .then((data) => {
        if (callback) {
          callback(data);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }
  function enableTwoFactor(token, callback) {
    setLoading(true);
    candidateAPI
      .enableTwoFactor(token)
      .then((data) => {
        if (callback) {
          callback(data);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }
  function validateTotp(token, callback) {
    setLoading(true);
    candidateAPI
      .validateTotp(token)
      .then((data) => {
        if (callback) {
          callback(data);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    getUserInfo();
  }, []);

  // useEffect(() => {
  //   if (auth) {
  //     bountyCandidateAPI
  //       .getProfile(auth._id)
  //       .then((data) => setUser(data))
  //       .catch((err) => {});
  //   }
  // }, [auth]);

  const memoedValue = useMemo(
    () => ({
      auth,
      loading,
      error,
      login,
      logout,
      updateProfile,
      linkAccount,
      generateTwoFactor,
      sendTotp,
      disableTwoFactor,
      enableTwoFactor,
      validateTotp,
    }),
    [auth, loading, error]
  );
  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
