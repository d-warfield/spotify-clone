import React,
{createContext,
useContext,
useReducer}
from "react";

//prepare datalayer for what's about to come
export const DataLayerContext = createContext();

//children refers to children in index.js
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);