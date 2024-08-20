import { SchoolDB } from "./types";

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

