import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { SchoolsClass } from "./SchoolsClass";
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
  const [schoolsClass, setSchoolsClass] = useState<SchoolsClass | null>(null);

  useEffect(() => {
    const initialize = async () => {
      const instance = new SchoolsClass();
      await instance.init();
      setSchoolsClass(instance);
    };

    initialize();
  }, []);

  if (!schoolsClass) {
    return <div>Loading...</div>;
  }

  const value: SchoolsDataContextType = {
    schoolsClass
  };

  return (
    <SchoolsDataContext.Provider value={value}>
      {children}
    </SchoolsDataContext.Provider>
  );
};
