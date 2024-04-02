import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Dashboard from './pages/dashboard/Dashboard'
import { useAuth } from "./contexts/AuthContext";

export default function App() {
  const { isAuthenticated ,role} = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={ role === 'user' ?  <Layout /> : <Navigate to={"/dashboard"}/>}>
          <Route
            index
            element={isAuthenticated ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to={"/"} />}
          />
        </Route>
        <Route path="/dashboard" element={ role === 'admin' ?  <Dashboard/> : <Navigate to={"/"}/>}>
          
        </Route>
      </Routes>
    </Router>
  );
}
