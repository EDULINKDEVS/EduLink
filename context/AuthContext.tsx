import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
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

enum userBackInfo {
  NIEPRAWIDLOWY_EMAIL_LUB_HASLO = "nieprawidłowy email lub hasło",
  BLAD_PODCZAS_PROBY_POLACZENIA_Z_SERWEREM = "błąd podczas próby połączenia z serwerem",
  NIEPRAWIDLOWE_DANE = "nieprawidłowe dane",
}

type AuthContextType = {
  user: string | null;
  setUser: (value: string | null) => void;
  login: (email: string, password: string, rememberMe: boolean) => Promise<userBackInfo | null>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const login = async (email: string, password: string, rememberMe: boolean): Promise<userBackInfo | null> => {
    if (!validateEmail(email)) {
      return userBackInfo.NIEPRAWIDLOWE_DANE;
    }
    console.log(email);
    console.log(password);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setUser(data.userId);
        if (rememberMe) {
          localStorage.setItem('user', JSON.stringify(data.userId));
        }
        return null;
      } else if (response.status === 404) {
        return userBackInfo.NIEPRAWIDLOWY_EMAIL_LUB_HASLO;
      } else if (response.status === 500) {
        return userBackInfo.BLAD_PODCZAS_PROBY_POLACZENIA_Z_SERWEREM;
      } else {
        return userBackInfo.NIEPRAWIDLOWE_DANE;
      }
    } catch (error) {
      return userBackInfo.BLAD_PODCZAS_PROBY_POLACZENIA_Z_SERWEREM;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    setUser,
    login,
    logout,
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
