import React from "react";
import { createContext, useContext, useReducer } from "react";

//This is a data layer
export const StateContext = createContext();

//Building a context provider

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);