import { Dispatch, SetStateAction } from "react";

export enum registerSchoolsActions {
    ADD_SCHOOL = "ADD_SCHOOL",
    REMOVE_SCHOOL = "REMOVE_SCHOOL",
    EDIT_SCHOOL = "EDIT_SCHOOL"
  }
  export enum degreeLabelEnum {
    DURING = "DURING",
    GRADUATE = "GRADUATE"
  }
  export enum degreeEnum {
    BACHELOR = "BACHELOR",
    ENGINEER = "ENGINEER",
    MASTER = "MASTER",
    DOCTOR = "DOCTOR"
  }
  
  export interface School {
    id: string;
    name: string;
    degree: degreeEnum;
    city:string;
    faculty:string;
    degreeLabel: degreeLabelEnum;
  }
  
  export type Action =
    | { type: registerSchoolsActions.ADD_SCHOOL; payload: School }
    | { type: registerSchoolsActions.REMOVE_SCHOOL; payload: string }
    | { type: registerSchoolsActions.EDIT_SCHOOL; payload: School };
   export type SchoolDB = {
      id: string;
      name: string;
      lev: string;
    };
    
    export type RegisterDataType = {
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
      city:string;
    };
    
    export type response_cities = {
      id: string;
      name: string;
    }
    
    export type RegisterContextType = {
      dispatch: React.Dispatch<Action>;
      schools: School[];
      handleAddSchool: (name: string, city: string, faculty: string, degree: degreeEnum, degreeLabel: degreeLabelEnum, dispatch: React.Dispatch<Action>) => void;
      handleEditSchool: (name: string, city: string, faculty: string, degree: degreeEnum, id: string, degreeLabel: degreeLabelEnum, dispatch: React.Dispatch<Action>) => void;
      handleRemoveSchool: (id: string, dispatch: React.Dispatch<Action>) => void;
      registerData: RegisterDataType;
      setRegisterData: React.Dispatch<React.SetStateAction<RegisterDataType>>;
      getCitiesDB: () => void;
      getSchoolsDB: (value: string, lev:string) => void;
      getSkillsDB: (value: "hard" | "traits") => void;
      getProfilesDB: (value:string) => void;
      setCitiesDB: Dispatch<SetStateAction<{ name: string; id: string; }[]>>;
      setSchoolsDB: Dispatch<SetStateAction<SchoolDB[]>>;
      setProfilesDB: Dispatch<SetStateAction<{ name: string; id: string; }[]>>;
      citiesDB: { name: string, id: string }[];
      hardSkillsDB: {name:string, id:string}[];
      traitsDB: {name:string, id:string}[];
      schoolsDB: SchoolDB[];
      profilesDB: {name:string, id:string}[];
      traits: string[];
      setTraits: React.Dispatch<React.SetStateAction<string[]>>;
      hard_skills: string[];
      setHardSkills: React.Dispatch<React.SetStateAction<string[]>>;
      registerUser: () => Promise<void>;
    };
    