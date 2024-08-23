import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { UserDataGetter } from "./creatingUserDataObjectFunctions/getUserData";

enum userBackInfo {
  NIEPRAWIDLOWY_EMAIL_LUB_HASLO = "nieprawidłowy email lub hasło",
  BLAD_PODCZAS_PROBY_POLACZENIA_Z_SERWEREM = "błąd podczas próby połączenia z serwerem",
  NIEPRAWIDLOWE_DANE = "nieprawidłowe dane",
}

type userType = {
  userID: string;
  userToken: string;
}

type AuthContextType = {
  user: userType | null;
  setUser: (value: userType | null) => void;
  login: (email: string, password: string, rememberMe: boolean) => Promise<userBackInfo | null>;
  logout: () => void;
  dataClass: UserDataGetter | null;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userType | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [dataClass, setDataClass] = useState<UserDataGetter | null>(null)
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const login = async (email: string, password: string, rememberMe: boolean): Promise<userBackInfo | null> => {
    if (!validateEmail(email)) {
      return userBackInfo.NIEPRAWIDLOWE_DANE;
    }
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
        setUser({userID: data.userId, userToken: data.token});
        const dataClass = await new UserDataGetter(data.userId);
        await dataClass.getMainData();
        await dataClass.getEmployiesData();
        await dataClass.getProfileAssign();
        if(dataClass.employeeData?.status === 'pupil'){
          await dataClass.getSchoolData();
        }else{
          await dataClass.getUniversities();
        }
        await dataClass.getUserSkills();
        await setDataClass(dataClass);

        if (rememberMe) {
          localStorage.setItem('user', JSON.stringify(data));
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
    dataClass
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
