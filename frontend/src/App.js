import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Components/Login';
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import { ToastContainer } from "react-toastify";
import Home from "./Components/Home";
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from "./common";
import Context from "./Context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import Adminpanel from "./pages/Adminpanel";
import Allproduct from "./pages/Allproduct";
import Allusers from "./pages/Allusers";
import Navbar from "./Components/navbar";

function App() {

  const dispatch = useDispatch()

  const fetchUserDetails = async () => {
    const dataResponse = await fetch (SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : "include"
    })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }


  }

  useEffect(()=>{
    fetchUserDetails()
  },[])

  return (
    // <Router>
      <div className="App">
        <Context.Provider value = {{
          fetchUserDetails
        }}>
        <ToastContainer/>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/admin-panel" element={<Adminpanel/>}/>
              <Route path="/admin-panel/all-product" element={<Allproduct/>}/>
              <Route path="/admin-panel/all-users" element={<Allusers/>}/>
            </Routes>
          </div>
        </div>
        </Context.Provider>
      </div>
    // </Router>
  );
}

export default App;
