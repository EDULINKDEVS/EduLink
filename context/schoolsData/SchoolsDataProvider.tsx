import React, { createContext, ReactNode, useContext } from "react";
import { faculty, schools, traits, universities, science, human } from "./exampleSchoolsData";
import { SchoolsDataContextType } from "./types";

const SchoolsDataContext = createContext<SchoolsDataContextType | undefined>(undefined);

export const useSchoolsData = () => {
  const context = useContext(SchoolsDataContext);
  if (!context) {
    throw new Error("useSchoolsData must be used within a SchoolsDataProvider");
  }
  return context;
};

export const SchoolsDataProvider = ({ children }: { children: ReactNode }) => {
  const value: SchoolsDataContextType = {
    faculty,
    schools,
    traits,
    universities,
    science,
    human
  };

  return (
    <SchoolsDataContext.Provider value={value}>
      {children}
    </SchoolsDataContext.Provider>
  );
};
