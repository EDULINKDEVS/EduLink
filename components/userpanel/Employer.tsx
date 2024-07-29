import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import PanelContent from '@/components/company_platform/content_company/PanelContent';
import UserOptionWraper from '@/components/company_platform/userpanel_company/nav/UserOptionWraper';

export const optionsEnum = {
    SETTINGS: 'settings',
    MESSAGES: 'messages',
    SEARCH: 'search',
    CALENDAR: 'calendar',
    PROFILE: 'profile',
    PLUS_OFFER_COMPANY: 'plusOffer',
    WATCH_OFFER: 'watchOffer'
  }
  
  const options = [
    { id: "watchOffer", label: "Przejrzyj swoje oferty" },
    { id: "plusOffer", label: "Dodaj ofertę" },
    { id: 'settings', label: 'Ustawienia profilu' },
    { id: 'messages', label: 'Wiadomości' },
    { id: 'search', label: 'Szukaj pracowników' },
    { id: 'calendar', label: 'Kalendarz' },
    { id: 'profile', label: 'Profil' },
  ];
  
  enum optionsFBEnum {
    COLUMN = 'column',
    ROW = 'row'
  }
const Employer = () => {

      
  

  return (
    <Box display="flex" height="100vh">
    <Box width={selectedOption ? '89%' : '25%'} bgcolor="#A758B5" sx={{ transition: 'width 0.3s' }}>
      {selectedOption && <PanelContent id={selectedOption} />}
    </Box>
    <Box
      width={selectedOption ? '11%' : '75%'}
      bgcolor="white"
      sx={{
        transition: 'width 0.3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      position="relative"
    >
      <Container
        maxWidth="lg"
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: selectedOption ? 'flex-start' : 'center',
          alignItems: 'center',
          flexDirection: selectedOption ? 'column' : 'row',
        }}
      >
        <UserOptionWraper clickFunction={handleIconClick} FD={optionsFD} />
      </Container>
    </Box>
  </Box>
  )
}

export default Employer