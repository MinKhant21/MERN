import { createContext, useEffect, useReducer } from "react";

import React from "react";

let AuthContext = createContext();

let AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user: action.payload };
      break;
    case "LOG_OUT":
      return { ...state, user: action.payload };
      break;
    case "ROLE":
      return { ...state, role:action.payload };
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
    role: "user",
  });

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("user"));
    let role = localStorage.getItem("role");
    if (userData) {
      dispatch({ type: "IS_AUTH_READY" });
      if (role == "admin") {
        dispatch({ type: "LOG_IN", payload: userData });
        dispatch({ type: "ROLE" ,payload:"admin"});
      } else {
        dispatch({ type: "LOG_IN", payload: userData });
        dispatch({ type: "ROLE" ,payload:"user"});
      }
    } else {
      dispatch({ type: "LOG_OUT" });
    }
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthContextProvider };
