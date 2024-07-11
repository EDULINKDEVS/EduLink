import React from 'react';
import { Box, Grid } from '@mui/material';
import Useroption from './Useroption';
import { FaCog, FaEnvelope, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const UserOptionWraper = () => {
  return (
    <Box sx={{height: '100svh', display: 'flex', justifyContent: 'center', alignItems:'center'}}>

    <Box sx={{position: 'relative', color: 'white', justifyContent: 'center', aligns: 'center', height: '390px', overflow: 'visible', width: '500px' }}>
      <Box  sx={{ position: 'absolute', left: '50%',top: '30px', transform: 'translateX(-60%)', display: 'flex', justifyContent: 'center', aligns: 'center', margin: '10px' }}>
      <Useroption icon={<FaCog style={{ color: 'white' }} />} text='Ustawienia profilu' />
      </Box>
      <Box  sx={{ position: 'absolute', left: '10%', top: '120px',  display: 'flex', justifyContent: 'center', aligns: 'center', margin: '10px' }}>
        <Useroption icon={<FaEnvelope style={{ color: 'white' }} />} text='Wiadomości' />
      </Box>
      <Box  sx={{ position: 'absolute', right: '10%', top: '120px',  display: 'flex', justifyContent: 'center', aligns: 'center', margin: '10px' }}>
        <Useroption icon={<FaSearch style={{ color: 'white' }} />} text='Szukaj ofert' />
      </Box>
      <Box  sx={{ position: 'absolute', right: '20%', bottom: '0px',   display: 'flex', justifyContent: 'center', aligns: 'center', margin: '10px' }}>
        <Useroption icon={<FaCalendarAlt style={{ color: 'white' }} />} text='Kalendarz' />
      </Box>
      <Box  sx={{  position: 'absolute', left: '20%', bottom: '0px', display: 'flex', justifyContent: 'center', aligns: 'center', margin: '10px' }}>
        <Useroption icon={<PermIdentityIcon style={{ color: 'white' }} />} text='Profil' />
      </Box>
     
    </Box>
    <Box sx={{display: 'flex', gap: '10px'}}>
        <Useroption icon={<FaCog style={{ color: 'white' }} />} text='Ustawienia profilu' />
        <Useroption icon={<FaEnvelope style={{ color: 'white' }} />} text='Wiadomości' />
        <Useroption icon={<FaSearch style={{ color: 'white' }} />} text='Szukaj ofert' />
        <Useroption icon={<FaCalendarAlt style={{ color: 'white' }} />} text='Kalendarz' />
        <Useroption icon={<PermIdentityIcon style={{ color: 'white' }} />} text='Profil' />
     
    </Box>

    </Box>
  )
}

export default UserOptionWraper;
