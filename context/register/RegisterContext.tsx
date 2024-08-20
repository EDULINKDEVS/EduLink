import React, { createContext, ReactNode, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { degreeEnum, registerSchoolsActions, School, Action, degreeLabelEnum } from "./types";
import { schoolReducer } from "./reducer";
import Cookies from 'js-cookie';
import { getWithExpiry, setWithExpiry } from "../localStorageSetter";
type SchoolProfile = {
  profile_id: number;
  profile_name: string;
};

type SchoolDB = {
  school_id: number;
  school_name: string;
  lev: string;
  profiles: SchoolProfile[];
};

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
  degreeLabel: degreeLabelEnum | null;
  dateOfBirth: Date | null;
};

const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
};




export type response_cities = {
  id: string;
  name: string;
}

const _getSchoolsWithProfiles = async (city: string): Promise<SchoolDB[]> => {
  try {
    const response = await fetch(`/api/graddata/getschools?city=${encodeURIComponent(city)}`);

    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status}) for city: ${city}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Failed to fetch schools and profiles for city:', city, 'Error:', error);
  }

  return [];
};

const getCitiesDB = async () => {
  console.log('elo');
  try {

    const response = await fetch('/api/graddata/getcities');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.cities;
  } catch (error) {
    console.error('Failed to fetch cities:', error);
    return [];
  }
};

export type RegisterContextType = {
  schools: School[];
  handleAddSchool: (name: string, city: string, faculty: string, degree: degreeEnum, degreeLabel: degreeLabelEnum) => void;
  handleEditSchool: (name: string, city: string, faculty: string, degree: degreeEnum, id: string, degreeLabel: degreeLabelEnum) => void;
  handleRemoveSchool: (id: string) => void;
  registerData: RegisterDataType;
  cities: { name: string, id: string }[];
  schoolsDB: SchoolDB[],
  getCities: () => void;
  setRegisterData: React.Dispatch<React.SetStateAction<RegisterDataType>>;
  getSchoolsWithProfiles: (value: string) => void;
};

export const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

const RegisterContextProvider = ({ children }: { children: ReactNode }) => {
  const [cities, setCities] = useState<{ name: string, id: string }[]>([]);
  const [schools, dispatch] = useReducer<React.Reducer<School[], Action>>(schoolReducer, []);
  const [schoolsDB, setSchoolsDB] = useState<SchoolDB[]>([]);
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

  const getCities = async () => {
    const data = await getWithExpiry<{ name: string; id: string }[]>('cities');

    if (!data) {

      const citiesFromApi = await getCitiesDB();
      if (citiesFromApi) {
        setCities(citiesFromApi);
        setWithExpiry('cities', citiesFromApi, 30);
      }
    } else {
      setCities(data);

    }
  };

  const getSchoolsWithProfiles = async (city: string) => {
    const data = await getWithExpiry<SchoolDB[]>(`${city}_schools`);
    console.log(data);
    if (!data) {
      const cityID = cities.find((_city) => _city.name === city)?.id;
      if (cityID) {
        const schoolsFromApi = await _getSchoolsWithProfiles(cityID);
        if (schoolsFromApi) {
          setSchoolsDB(schoolsFromApi);
          setWithExpiry(`${city}_schools`, schoolsFromApi, 30);
        }
      }
    } else {
      setSchoolsDB(data);
    }
  };

  const get_schools_or_universities = (city_name: string) => {

  }

  const handleAddSchool = (name: string, city: string, faculty: string, degree: degreeEnum, degreeLabel: degreeLabelEnum) => {
    if (name && degree) {
      const newSchool: School = {
        id: uuidv4(),
        name,
        degree,
        degreeLabel,
        city,
        faculty
      };
      dispatch({ type: registerSchoolsActions.ADD_SCHOOL, payload: newSchool });
    }
  };

  const handleEditSchool = (name: string, city: string, faculty: string, degree: degreeEnum, id: string, degreeLabel: degreeLabelEnum) => {
    const updatedSchool: School = {
      id,
      name,
      city,
      faculty,
      degree,
      degreeLabel
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
    cities,
    getCities,
    schoolsDB,
    setRegisterData,
    getSchoolsWithProfiles
  };

  return <RegisterContext.Provider value={value}>{children}</RegisterContext.Provider>;
};

export default RegisterContextProvider;
