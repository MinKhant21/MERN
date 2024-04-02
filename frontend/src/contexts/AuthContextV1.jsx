import { createContext, useEffect, useReducer } from "react";

import React from "react";

let AuthContext = createContext();

let AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user: action.payload };
      break;
    case "LOG_OUT":
      return { ...state, user: null };
      break;
    case "ROLE":
      return { ...state, role: action.payload };
      break;
    case "IS_AUTH_READY":
      return { ...state, authReady: true };
      break;
    default:
      return state;
      break;
  }
};

export default function AuthContextProvider({ children }) {
  let [state, dispatch] = useReducer(AuthReducer, {
    user: null,
    authReady: false,
  });

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("user"));
    dispatch({ type: "IS_AUTH_READY" });
    if (userData) {
      dispatch({ type: "LOG_IN", payload: userData });
    } else {
      dispatch({ type: "LOG_OUT" });
    }
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthContextProvider };
