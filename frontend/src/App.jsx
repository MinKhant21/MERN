import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";

export default function App() {
  const {isAuthenticated} = useAuth();
  return <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to={'/login'}/>}/>
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to={'/'}/> }/>
      </Routes>
    </Router>
  ;
}
