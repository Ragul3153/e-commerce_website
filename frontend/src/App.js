import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Components/Login';
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import { ToastContainer } from "react-toastify";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer/>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
