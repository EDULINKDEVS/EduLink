import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import UserOptionWraper from '@/components/userpanel/nav/UserOptionWraper';

const options = [
  { id: 'settings', label: 'Ustawienia profilu' },
  { id: 'messages', label: 'Wiadomości' },
  { id: 'search', label: 'Szukaj ofert' },
  { id: 'calendar', label: 'Kalendarz' },
  { id: 'profile', label: 'Profil' },
];

enum optionsFBEnum{
  COLUMN = 'column',
  ROW = 'row'
}
const PanelContent = ({ label }: { label: string }) => (
  <Box p={2}>
    <Typography variant="h6" color="white">{label}</Typography>
    {/* Add appropriate panel content here */}
  </Box>
);

const UserPanel: React.FC = () => {
  const [optionsFD, setOptionFD] = useState<optionsFBEnum>(optionsFBEnum.ROW);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleIconClick = (id: string) => {
    console.log('asdsa');
    const option = options.find(opt => opt.id === id);
    if (option) {
      setSelectedOption(option.label);
    }
    selectedOption ? setOptionFD(optionsFBEnum.COLUMN) : setOptionFD(optionsFBEnum.ROW);
  };

  return (
    <Box display="flex" height="100vh">
      <Box width={selectedOption ? '90%' : '25%'} bgcolor="#A758B5" sx={{ transition: 'width 0.3s' }}>
        {selectedOption && <PanelContent label={selectedOption} />}
      </Box>
      <Box
        width={selectedOption ? '10%' : '75%'}
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
