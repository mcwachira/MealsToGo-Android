import { useState, createContext, useRef } from "react";
import {
  loginRequest,
  registerRequest,
  signOutRequest,
} from "./authentication.service";
import { auth } from "../../utils/firebase.config";
// import { auth } from "../../utils/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
export const AuthenticationContext = createContext();
// const auth = getAuth()
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  // const auth = useRef(getAuth()).current;
  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const response = await loginRequest(auth, email, password);
      setUser(response);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e.toString());
    }
  };

  const onRegister = async (email, password, confirmPassword) => {
    setIsLoading(true);
    if (password !== confirmPassword) {
      setError("Error: Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      const response = await registerRequest(auth, email, password);
      setUser(response);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e.toString());
    }
  };

  const onLogout = async () => {
    await signOutRequest(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
