import React, { useContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  function signup(name, email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (cred) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            console.log("User created with displayName: " + name);
          });
      }
    );
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then(() => {});
  }

  function logout() {
    return auth.signOut();
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  if (loading) {
    return null;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;