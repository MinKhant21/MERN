import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./router";
import { AuthProvider } from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Routes />
  </AuthProvider>
);
