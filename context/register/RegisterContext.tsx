import React, { createContext, ReactNode, useReducer, useState } from "react";
import { School, Action, SchoolDB, RegisterDataType, RegisterContextType } from "./types";
import { schoolReducer } from "./reducer";
import { handleAddSchool, handleEditSchool, handleRemoveSchool } from "./schoolTableFunctions";
import { _getCitiesDB, _getProfilesDB, _getSchoolsDB } from "./dbfunctions";

export const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

const RegisterContextProvider = ({ children }: { children: ReactNode }) => {
  const [schools, dispatch] = useReducer<React.Reducer<School[], Action>>(schoolReducer, []);
  const [citiesDB, setCitiesDB] = useState<{ name: string, id: string }[]>([]);
  const [schoolsDB, setSchoolsDB] = useState<SchoolDB[]>([]);
  const [profilesDB, setProfilesDB] = useState<{ name: string, id: string }[]>([]);
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
    degreeLabel: null,
    dateOfBirth: null
  });

  const getCitiesDB = async () => {
    const data = await sessionStorage.getItem('cities');
    if (data) {
      const parsedCities = JSON.parse(data);
      setCitiesDB(parsedCities);
    } else {
      const cities = await _getCitiesDB();
      setCitiesDB(cities);
      sessionStorage.setItem('cities', JSON.stringify(cities));
    }
  };

  const getSchoolsDB = async (city: string, lev: string) => {
    const data = await sessionStorage.getItem(`${city}_schools_${lev}`);
    if (data) {
      const parsedSchools = JSON.parse(data);
      setSchoolsDB(parsedSchools);
    } else {
      const id = citiesDB.find(_city => _city.name === city)?.id;
      if (id) {
        const schools = await _getSchoolsDB(id, lev);
        setSchoolsDB(schools);
        sessionStorage.setItem(`${city}_schools_${lev}`, JSON.stringify(schools));
      }
    }
  };

  const getProfilesDB = async (school: string) => {
    const data = await sessionStorage.getItem(`${school}_profiles`);
    if (data) {
      const parsedProfiles = JSON.parse(data);
      setProfilesDB(parsedProfiles);
    } else {
      const id = schoolsDB.find(_school => _school.name === school)?.id;
      if(id){
        const profiles = await _getProfilesDB(id);
        setProfilesDB(profiles);
        sessionStorage.setItem(`${school}_profiles`, JSON.stringify(profiles));
      }
    }
  };

  const value: RegisterContextType = {
    dispatch,
    schools,
    handleAddSchool,
    handleEditSchool,
    handleRemoveSchool,
    registerData,
    setRegisterData,
    getCitiesDB,
    getSchoolsDB,
    getProfilesDB,
    setCitiesDB,
    setSchoolsDB,
    setProfilesDB,
    citiesDB,
    schoolsDB,
    profilesDB
  };

  return <RegisterContext.Provider value={value}>{children}</RegisterContext.Provider>;
};

export default RegisterContextProvider;
