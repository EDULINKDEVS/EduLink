import React, { createContext, ReactNode, useReducer, useState } from "react";
import { School, Action, SchoolDB, RegisterDataType, RegisterContextType } from "./types";
import { schoolReducer } from "./reducer";
import { handleAddSchool, handleEditSchool, handleRemoveSchool } from "./schoolTableFunctions";
import { _getCitiesDB, _getProfilesDB, _getSchoolsDB, _getSkillsDB, _registerUser, pupilDataPackage, studentDataPackage } from "./dbfunctions";

export const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

const RegisterContextProvider = ({ children }: { children: ReactNode }) => {
  const [schools, dispatch] = useReducer<React.Reducer<School[], Action>>(schoolReducer, []);
  const [citiesDB, setCitiesDB] = useState<{ name: string, id: string }[]>([]);
  const [schoolsDB, setSchoolsDB] = useState<SchoolDB[]>([]);
  const [traitsDB, setTraitsDB] = useState<{name:string, id:string}[]>([]);
  const [hardSkillsDB, setHardSkillsDB] = useState<{name:string, id:string}[]>([]);
  const [profilesDB, setProfilesDB] = useState<{ name: string, id: string }[]>([]);
  const [traits, setTraits] = useState<string[]>([]);
  const [hard_skills, setHardSkills] = useState<string[]>([])
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
    dateOfBirth: null,
    city:''
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

  const getSkillsDB = async (value: "hard" | "traits") => {
    const data = await sessionStorage.getItem(value);
    if((value === 'hard' && hardSkillsDB.length === 0) || (value === 'traits' && traitsDB.length === 0)){

      if(data) {
        const parsedSkills = JSON.parse(data);
        value === 'hard' ? setHardSkillsDB(parsedSkills) : setTraitsDB(parsedSkills); 
      }
      else{
        const skills = await _getSkillsDB(value);
        value === 'hard' ? setHardSkillsDB(skills) : setTraitsDB(skills); 
        sessionStorage.setItem(value, JSON.stringify(skills));
      }
    }
  }

  const registerUser = async () => {
    if (registerData.status === 'school') {
      const d = registerData.school_level === 'vocational' ? "voc" :
                registerData.school_level === "technical" ? "tech" :
                registerData.school_level === "high_school" ? "high" :
                null;
  
      if (d && registerData.degreeLabel) { 
        const pupilPack: pupilDataPackage = {
          schoolName: registerData.school_name,
          schoolCity: registerData.school_city,
          schoolProfile: registerData.school_profile,
          schoolLevel: d,
          degreeLabel: registerData.degreeLabel
        };
        let r_traits:string[] = [];
        let r_hardSkills:string[] = [];
        traits.forEach(trait => {
          const t = traitsDB.find(el => el.name === trait)?.id;

          t && r_traits.push(t);
        });
        hard_skills.forEach(skill => {
          const t = hardSkillsDB.find(el => el.name === skill)?.id
          t && r_hardSkills.push(t);
        })
        
        if (registerData.status && registerData.dateOfBirth) {
          await _registerUser(
            registerData.email,
            registerData.phone,
            registerData.f_name,
            registerData.l_name,
            registerData.pass,
            registerData.status, 
            registerData.dateOfBirth,
            r_traits,
            r_hardSkills,
            registerData.city,
            pupilPack
          );
        }
      } else {
        console.error("Degree label or school level is not valid.");
      }
    } else if (registerData.status === 'study') {
      const studentPack: studentDataPackage[] = [];
      schools.forEach(el => {
        studentPack.push({
          schoolName: el.name,
          schoolCity: el.city,
          schoolProfile: el.faculty,
          schoolLabel: el.degreeLabel,
          schoolDegree: el.degree
        });
      });
  
      if (registerData.dateOfBirth) {
        await _registerUser(
          registerData.email,
          registerData.phone,
          registerData.f_name,
          registerData.l_name,
          registerData.pass,
          registerData.status,  
          registerData.dateOfBirth,
          traits,
          hard_skills,
          registerData.city,
          undefined,
          studentPack
        );
      } else {
        console.error("Date of birth is missing.");
      }
    } else {
      console.error("Invalid status for registration.");
    }
  }
  
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
    getSkillsDB,
    setCitiesDB,
    setSchoolsDB,
    setProfilesDB,
    citiesDB,
    hardSkillsDB,
    traitsDB,
    schoolsDB,
    profilesDB,
    traits,
    setTraits,
    hard_skills,
    setHardSkills,
    registerUser
  };

  return <RegisterContext.Provider value={value}>{children}</RegisterContext.Provider>;
};

export default RegisterContextProvider;
