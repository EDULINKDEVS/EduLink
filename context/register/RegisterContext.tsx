import React, { createContext, ReactNode, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { degreeEnum, registerSchoolsActions, School } from "./types";
import { schoolReducer } from "./reducer";

type RegisterDataType = {
  email: string;
  confirm_email: string;
  phone: string;
  f_name: string;
  l_name: string;
  pass: string;
  confirm_pass: string;
  status: "school" | "study" | null;
  school_level: "vocational" | "technical" | "high_school" | "";
  school_name: string;
  dateOfBirth: Date;
}

export type RegisterContextType = {
  schools: School[];
  handleAddSchool: (name: string, degree: degreeEnum) => void;
  handleEditSchool: (name: string, degree: degreeEnum, id: string) => void;
  handleRemoveSchool: (id: string) => void;
  registerData: RegisterDataType;
  setRegisterData: (value: RegisterDataType) => void;
}

export const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

const RegisterContextProvider = ({ children }: { children: ReactNode }) => {
  const [schools, dispatch] = useReducer(schoolReducer, []);
  const [registerData, setRegisterData] = useState<RegisterDataType>({
    email: '',
    confirm_email: '',
    phone: '',
    f_name: '',
    l_name: '',
    pass: '',
    confirm_pass: '',
    status: null,
    school_level: '',
    school_name: '',
    dateOfBirth: new Date()
  });

  const handleAddSchool = (name: string, degree: degreeEnum) => {
    if (name && degree) {
      const newSchool: School = {
        id: uuidv4(),
        name,
        degree,
      };
      dispatch({ type: registerSchoolsActions.ADD_SCHOOL, payload: newSchool });
    }
  };

  const handleEditSchool = (name: string, degree: degreeEnum, id: string) => {
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
    handleRemoveSchool,
    registerData,
    setRegisterData
  }

  return <RegisterContext.Provider value={value}>{children}</RegisterContext.Provider>;
};

export default RegisterContextProvider;
