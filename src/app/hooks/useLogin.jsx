import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-toastify";
import { setTokens } from "../services/localStorage.service";

const httpLogin = axios.create();

const LoginContext = React.createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

const LoginProvider = ({ children }) => {
  const [error, setError] = useState(null);

  async function singIn({ email, password, ...rest }) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`;

    try {
      const { data } = await httpLogin.post(url, {
        email,
        password,
        returnSecureToken: true,
      });
      setTokens(data);
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      if (code === 400) {
        if (message === "EMAIL_NOT_FOUND") {
          const errorObject = {
            email: "Пользователь с таким Email не существует",
          };
          throw errorObject;
        } else if (message === "INVALID_PASSWORD") {
          const errorObject = {
            password: "Не правильный пароль",
          };
          throw errorObject;
        }
      }
    }
  }

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  return (
    <LoginContext.Provider value={{ singIn }}>{children}</LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LoginProvider;
