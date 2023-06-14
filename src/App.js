import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Prime from "./Prime";

import Prduct from './Prduct';


function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
      

        <Route path="/Home" element={<Home/>}  />
        <Route path="/login" element= <h1>Login</h1> />
        <Route path="/returns" element=<h1>Returns</h1> />
        <Route path="/prime_login" element={<Prime/>} />
        </Routes>

        
       
        
     

  
     
    </Router>
   
  );
}

export default App;
