import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import PanelContent from '@/components/company_platform/content_company/PanelContent';
import UserOptionWraper from '@/components/company_platform/userpanel_company/nav/UserOptionWraper';





export const optionsEnum = {
  SETTINGS: 'settings',
  MESSAGES: 'messages',
  SEARCH: 'search',
  CALENDAR: 'calendar',
  PROFILE: 'profile'
}
const options = [
  { id: 'settings', label: 'Ustawienia profilu' },
  { id: 'messages', label: 'Wiadomości' },
  { id: 'search', label: 'Szukaj pracowników' },
  { id: 'calendar', label: 'Kalendarz' },
  { id: 'profile', label: 'Profil' },
];

enum optionsFBEnum{
  COLUMN = 'column',
  ROW = 'row'
}


const UserPanel: React.FC = () => {
  const [optionsFD, setOptionFD] = useState<optionsFBEnum>(optionsFBEnum.ROW);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleIconClick = (id: string) => {
    console.log('asdsa');
    const option = options.find(opt => opt.id === id);
    if (option) {
      setSelectedOption(option.id);
      option?.label ? setOptionFD(optionsFBEnum.COLUMN) : setOptionFD(optionsFBEnum.ROW);
    }
  };

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
  );
};

export default UserPanel;
