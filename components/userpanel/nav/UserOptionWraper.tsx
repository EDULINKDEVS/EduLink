import React, { ReactNode, useEffect, useState } from "react";
import { Box } from "@mui/material";
import Useroption from "./Useroption";
import { FaCog, FaEnvelope, FaSearch, FaCalendarAlt } from "react-icons/fa";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { AccountBox } from "@mui/icons-material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const optionsUser = [
  {
    id: "profile",
    icon: (
      <AccountBox
        style={{
          fontSize: "1.6em",
        }}
      />
    ),
    label: "Profil",
  },
  { id: "messages", icon: <FaEnvelope />, label: "Wiadomości" },
  { id: "search", icon: <FaSearch />, label: "Szukaj ofert" },
  { id: "settings", icon: <FaCog />, label: "Ustawienia profilu" },
  { id: "back", icon: <KeyboardArrowRightIcon sx={{fontSize: '2em'}}/>, label: "Wróć" },

];
const optionsCompany = [
  {
    id: "profile",
    icon: (
      <AccountBox
        style={{
          fontSize: "1.6em",
        }}
      />
    ),
    label: "Profil",
  },
  {id:  "watchOffer", icon: <LocalOfferIcon sx={{fontSize:"50px"}} />, label: "Przejrzyj swoje oferty" },
  { id: "plusOffer", icon: <AddCircleOutlineIcon sx={{fontSize:"50px"}} />, label: "Dodaj ofertę" },
  { id: "messages", icon: <FaEnvelope />, label: "Wiadomości" },
  { id: "search", icon: <FaSearch />, label: "Szukaj pracowników" },
  { id: "settings", icon: <FaCog />, label: "Ustawienia profilu" },
  { id: "back", icon: <KeyboardArrowRightIcon sx={{fontSize: '2em'}}/>, label: "Wróć" },


];
const UserOptionWraper = ({
  clickFunction,
  FD,
  type
}: {
  clickFunction: (id: string) => void;
  FD: string;
  type: string;
}) => {
  const [options, setOptions] = useState<{id:string, icon: ReactNode, label:string}[] | null>(null);
  useEffect(()=>{
    (type === 'employee')
    ?
      setOptions(optionsUser)
    :
      setOptions(optionsCompany)
      ;
  },[type])
  return (
    <Box
      sx={{
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '140px',

      }}
    >
      <Box sx={{ display: "flex", gap: "15px", flexDirection: FD }}>
        {options?.map((option) => (
          <Box
            key={option.id}
            onClick={() => clickFunction(option.id)}
            sx={{
              width: '100%',
              display: (FD === 'row' && option.id === 'back') ? 'none' : 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '10px',
              cursor: 'pointer',
            }}
          >
            <Useroption
              icon={option.icon}
              text={option.label}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UserOptionWraper;
