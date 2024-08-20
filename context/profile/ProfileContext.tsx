import React, { createContext, useReducer, ReactNode, useContext, useState } from 'react';

import { Action } from './actions';
import profileTableReducer, { initialState, TableState } from './profileTableReducer';

type profileData = {
    f_name: string,
    l_name:string,
    birth_date:string,
    loc: string,
    description: string,
    univercities: {name:string, city: string, level: string}[],
    hardSkills: string[],
    softSkills: string[],
    profilePhotoURL: string,
    bgPhotoURL:string
}

interface ProfileContextType {
    state: TableState;
    dispatch: React.Dispatch<Action>;
    profileData: profileData | null;
    setProfileData: (value: profileData) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(profileTableReducer, initialState);
    const [profileData, setProfileData] = useState<null | profileData>(null);
    return (
        <ProfileContext.Provider value={{ state, dispatch, profileData, setProfileData }}>
            {children}
        </ProfileContext.Provider>
    );
};

export { ProfileProvider, ProfileContext };