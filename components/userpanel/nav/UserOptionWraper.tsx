import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Useroption from './Useroption';
import { FaCog, FaEnvelope, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const options = [
  { id: 'settings', icon: <FaCog />, label: 'Ustawienia profilu' },
  { id: 'messages', icon: <FaEnvelope />, label: 'Wiadomości' },
  { id: 'search', icon: <FaSearch />, label: 'Szukaj ofert' },
  { id: 'calendar', icon: <FaCalendarAlt />, label: 'Kalendarz' },
  { id: 'profile', icon: <PermIdentityIcon />, label: 'Profil' },
];

const UserOptionWraper = ({ clickFunction, FD }: { clickFunction: (id: string) => void, FD:string }) => {


  console.log(FD);
  return (
    <Box sx={{ height: '100svh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', gap: '10px', flexDirection: FD }}>
        {options.map((option) => (
          <Box
            key={option.id}
            onClick={() => clickFunction(option.id)}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px', cursor: 'pointer' }}
          >
            <Useroption icon={<span style={{ color: 'white' }}>{option.icon}</span>} text={option.label} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UserOptionWraper;
