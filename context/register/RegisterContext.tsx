import React, { createContext, ReactNode, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { degreeEnum, registerSchoolsActions, School, Action } from "./types";
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
  school_city: string;
  school_profile: string;
  dateOfBirth: Date | null;
};



export type RegisterContextType = {
  schools: School[];
  handleAddSchool: (name: string,city:string, faculty:string, degree: degreeEnum) => void;
  handleEditSchool: (name: string, city:string, faculty:string, degree: degreeEnum, id: string) => void;
  handleRemoveSchool: (id: string) => void;
  registerData: RegisterDataType;
  setRegisterData: React.Dispatch<React.SetStateAction<RegisterDataType>>;
};

export const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

const RegisterContextProvider = ({ children }: { children: ReactNode }) => {
  const [schools, dispatch] = useReducer<React.Reducer<School[], Action>>(schoolReducer, []);
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
    school_city: '',
    school_profile: '',
    dateOfBirth: null
  });

  const handleAddSchool = (name: string, city:string, faculty:string, degree: degreeEnum) => {
    if (name && degree) {
      const newSchool: School = {
        id: uuidv4(),
        name,
        degree,
        city,
        faculty
      };
      dispatch({ type: registerSchoolsActions.ADD_SCHOOL, payload: newSchool });
    }
  };

  const handleEditSchool = (name: string,city:string, faculty:string, degree: degreeEnum, id: string) => {
    const updatedSchool: School = {
      id,
      name,
      city,
      faculty,
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
  const register = () => {
    
  }
  const value: RegisterContextType = {
    schools,
    handleAddSchool,
    handleEditSchool,
    handleRemoveSchool,
    registerData,
    setRegisterData
  };

  return <RegisterContext.Provider value={value}>{children}</RegisterContext.Provider>;
};

export default RegisterContextProvider;
