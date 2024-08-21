import { degreeEnum, SchoolDB } from "./types";

export const _getSchoolsDB = async (city: string, lev: string): Promise<SchoolDB[]> => {
    try {
      console.log(city);
      console.log(lev);

      const response = await fetch(`/api/graddata/getschools?city_id=${encodeURIComponent(city)}&lev=${encodeURIComponent(lev)}`);
  
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
  
  export const _getCitiesDB = async () => {
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

  export const _getProfilesDB = async (school:string) => {
    try {
        const response = await fetch(`/api/graddata/getprofiles?school=${encodeURIComponent(school)}`);
    
        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status}) for school: ${school}`);
        }
    
        const data = await response.json();
        return data;
    
      } catch (error) {
        console.error('Failed to fetch schools and profiles for city:', school, 'Error:', error);
      }
    
      return [];
  }


  export const _getSkillsDB = async (value: 'hard' | 'traits') => {
    try {
        const response = await fetch(`/api/graddata/${value === 'hard' ? 'gethardskills' : 'gettraits'}`);
      
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    }
    catch(error){
      console.error('Failed to fetch skills');
    }
  }

  type pupilDataPackage = {
    schoolName:string;
    schoolCity:string;
    schoolProfile:string;
    schoolLevel: "voc" | "tech" | "high";
    degreeLabel: "DURING" | "GRADUATE"
  }

  

  type studentDataPackage = {
      schoolName:string;
      schoolCity:string;
      schoolProfile:string;
      schoolLabel: 'DURING' | 'GRADUATE';
      schoolDegree: degreeEnum;
  }
  export const _registerUser = async (email:string, phone:string, f_name:string, l_name:string, pass:string, status: "school" | "study", dateOfBirth: Date, pupilPack?:pupilDataPackage, studentPack?:studentDataPackage[] ) =>{
    
  }