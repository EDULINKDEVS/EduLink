import React, { createContext, ReactNode, useContext, useState } from "react";
import { School } from "./register/types";

type UserGraduate = {
  schoolName: string;
  city: string;
  name: string;
  profile: string;
  lev: "vocational" | "technical" | "high_school";
};

type UserEmployee = {
  f_name: string;
  l_name: string;
  phone: string;
  email: string;
  birth: Date;
  school: School[] | UserGraduate;
  skills: string[];
  city: string;
};

type UserEmployer = {
  name: string;
  email: string;
  nip: string;
  street: string;
  zip: string;
  city: string;
  num:string;
  phone:string;
};

enum loginBackInfo {
  BAD_USER_OR_PASSWORD = '404',
  SERVER_ERROR = '500',
  UNCORRECT_DATA = '400',
}

enum userBackInfo {
  NIEPRAWIDLOWY_EMAIL_LUB_HASLO = "nieprawidłowy email lub hasło",
  BLAD_PODCZAS_PROBY_POLACZENIA_Z_SERWEREM = "błąd podczas próby połączenia z serwerem",
  NIEPRAWIDLOWE_DANE = "nieprawidłowe dane",
}

type user = {
  label: 'employee' | 'employer'
}

type AuthContextType = {
  user: user | null;
  // Login: (email: string, password: string) => Promise<userBackInfo>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<user| null>(null);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  // const Login = async (email: string, password: string): Promise<userBackInfo> => {
  //   if (!validateEmail(email)) {
  //     return userBackInfo.NIEPRAWIDLOWE_DANE;
  //   }

  //   try {
  //     const response;

  //     if (response.status === 200) {
  //       const userData = await response.json();
  //       setUser(userData);
  //       return null;
  //     } else if (response.status === 404) {
  //       return userBackInfo.NIEPRAWIDLOWY_EMAIL_LUB_HASLO;
  //     } else if (response.status === 500) {
  //       return userBackInfo.BLAD_PODCZAS_PROBY_POLACZENIA_Z_SERWEREM;
  //     } else {
  //       return userBackInfo.NIEPRAWIDLOWE_DANE;
  //     }
  //   } catch (error) {
  //     return userBackInfo.BLAD_PODCZAS_PROBY_POLACZENIA_Z_SERWEREM;
  //   }
  // };

  const value = {
    user,
    // Login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

