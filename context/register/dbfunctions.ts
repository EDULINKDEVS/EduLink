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

  export type pupilDataPackage = {
    schoolName:string;
    schoolCity:string;
    schoolProfile:string;
    schoolLevel: "voc" | "tech" | "high";
    degreeLabel: "DURING" | "GRADUATE"
  }

  

  export type studentDataPackage = {
      schoolName:string;
      schoolCity:string;
      schoolProfile:string;
      schoolLabel: 'DURING' | 'GRADUATE';
      schoolDegree: degreeEnum;
  }



  export const _registerUser = async (
    email: string,
    phone: string,
    f_name: string,
    l_name: string,
    pass: string,
    status: "student" | "pupil",
    dateOfBirth: Date,
    traits: string[],
    hard_skills: string[],
    city: string,
    pupilPack?: pupilDataPackage,
    studentPack?: studentDataPackage[],
  ): Promise<{ message: string }> => {
    try {
      const response = await fetch('/api/auth/registerEmployee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          phone,
          f_name,
          l_name,
          pass,
          status,
          dateOfBirth,
          pupilPack,
          studentPack,
          traits,
          hard_skills,
          city
        })
      });
  
      const responseText = await response.text();
      console.log("Response Text:", responseText);
  
      if (!response.ok) {
        throw new Error(responseText);
      }
  
      const data = JSON.parse(responseText);
      return data;
  
    } catch (error) {
      console.error('Error during user registration:', error);
      throw new Error('Failed to register user');
    }
  };
  