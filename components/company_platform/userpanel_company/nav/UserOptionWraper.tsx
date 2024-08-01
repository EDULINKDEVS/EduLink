import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Useroption from "./Useroption";
import { FaCog, FaEnvelope, FaSearch, FaCalendarAlt } from "react-icons/fa";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { AccountBox } from "@mui/icons-material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const options = [
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
}: {
  clickFunction: (id: string) => void;
  FD: string;
}) => {
  console.log(FD);
  return (
    <Box
      sx={{
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: "15px", flexDirection: FD }}>
        {options.map((option) => (
          <Box
            key={option.id}
            onClick={() => clickFunction(option.id)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              cursor: "pointer",
            }}
          >
            <Useroption
              icon={<span style={{ color: "white" }}>{option.icon}</span>}
              text={option.label}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UserOptionWraper;
