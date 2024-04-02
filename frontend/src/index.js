import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {AuthProvider} from './contexts/AuthContext.jsx'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <AuthContextProvider>
  //   <Routes/>
  // </AuthContextProvider
  <AuthProvider>
    <App />
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
