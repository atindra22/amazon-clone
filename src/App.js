import "./App.css";
import React , {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Prime from "./Prime";

import Prduct from "./Prduct";
import Checkout from "./Checkout";
import Login from "./Login";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";



function App() {
    const [{basket} , dispatch] = useStateValue();

    useEffect(() => {
       //listener to user whether signed in/out
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if(authUser) {
            //the user is logged in
            dispatch({
              type: "SET_USER",
              user: authUser
            })
          }else{
            //the user is logged out
            dispatch({
              type: "SET_USER",
              user: null
            });
          }
         });
         return () => {
          //any cleanup operation
          unsubscribe();
         }
    }, []); 


  return (
    <Router>
      <Header />
      {/* <Checkout/> */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/returns" element=<h1>Returns</h1> />
        <Route path="/prime_login" element={<Prime />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
