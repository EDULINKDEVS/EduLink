export interface Faculty {
    name: string;
    id: number;
    features_1: number[];
    features_2: number[];
  }
  
  export interface SchoolProfile {
    schoolName: string;
    profiles: string[];
  }
  
  export interface Trait {
    name: string;
    id: number;
    popularity: number;
  }
  
  export interface University {
    name: string;
    faculties: number[];
  }
  
  export type SchoolsDataContextType = {
    faculty: Faculty[];
    schools: SchoolProfile[];
    traits: Trait[];
    universities: University[];
    science: string[];
    human: string[];
  };
  