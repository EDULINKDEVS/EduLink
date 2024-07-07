import React, { createContext, ReactNode, useContext, useReducer, useState } from "react";


const AuthContext = createContext<undefined>(undefined);
const AuthContextProvider = ({children}: {children: ReactNode}) => {
 

  const value = undefined

  return <AuthContext.Provider value={value}></AuthContext.Provider>;
};

export default AuthContextProvider;
