import React, { createContext, ReactNode, useContext, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { registerSchoolsActions, School } from "./types";
import { schoolReducer } from "./reducer";


export type RegisterContextType = {
  schools: School[];
  handleAddSchool: (name:string, degree: registerSchoolsActions) => void;
  handleEditSchool: (name:string, degree: registerSchoolsActions, id:string) => void;
  handleRemoveSchool: (id:string) => void;
}


export const RegisterContext = createContext<RegisterContextType | undefined>(undefined);
const RegisterContextProvider = ({children}: {children: ReactNode}) => {
  const [schools, dispatch] = useReducer(schoolReducer, []);


  const handleAddSchool = (name: string, degree: registerSchoolsActions) => {
    if (name && degree) {
      const newSchool: School = {
        id: uuidv4(),
        name,
        degree,
      };
      dispatch({ type: registerSchoolsActions.ADD_SCHOOL, payload: newSchool });
    }
  };
  const handleEditSchool = (name:string, degree: registerSchoolsActions, id:string) => {
      const updatedSchool: School = {
        id,
        name,
        degree,
      };
      dispatch({
        type: registerSchoolsActions.EDIT_SCHOOL,
        payload: updatedSchool,
      });
  };
  const handleRemoveSchool = (id: string) => {
    dispatch({ type: registerSchoolsActions.REMOVE_SCHOOL, payload: id });
  };

  const value = {
    schools,
    handleAddSchool,
    handleEditSchool,
    handleRemoveSchool
  }

  return <RegisterContext.Provider value={value}></RegisterContext.Provider>;
};

export default RegisterContextProvider;
