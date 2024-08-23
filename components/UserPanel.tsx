import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import UserOptionWraper from './userpanel/nav/UserOptionWraper';
import PanelContent from './content/PanelContent';
import { useAuth } from '@/context/AuthContext';

export const optionsEnum = {
    SETTINGS: 'settings',
    MESSAGES: 'messages',
    SEARCH: 'search',
    PROFILE: 'profile',
    PLUS_OFFER_COMPANY: 'plusOffer',
    WATCH_OFFER: 'watchOffer',
    BACK: 'back'
  }
  
  const options= [
    { id: "watchOffer", label: "Przejrzyj swoje oferty" },
    { id: "plusOffer", label: "Dodaj ofertę" },
    { id: 'settings', label: 'Ustawienia profilu' },
    { id: 'messages', label: 'Wiadomości' },
    { id: 'search', label: 'Szukaj pracowników' },
    { id: 'profile', label: 'Profil' },
    { id: 'back', label: 'Wróć'}
  ];

  enum optionsFBEnum {
    COLUMN = 'column',
    ROW = 'row'
  }
const UserPanel = ({type}: {type:string}) => {
  const {dataClass} = useAuth();
  const [optionsFD, setOptionFD] = useState<optionsFBEnum>(optionsFBEnum.ROW);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [active, setActive] = useState(0);

  useEffect(()=>{
    const g = dataClass?.mainData?.is_active;
    if(g){
      setActive(1);
    }else{
      setActive(0)
    }
    console.log(dataClass);
  }, [dataClass?.mainData?.is_active])
  const handleIconClick = (id: string) => {
    if(id === 'back'){
        setSelectedOption(null);
        setOptionFD(optionsFBEnum.ROW);
        return;
    }
    const option = options.find(opt => opt.id === id);
    if (option) {
      setSelectedOption(option.id);
      option?.label ? setOptionFD(optionsFBEnum.COLUMN) : setOptionFD(optionsFBEnum.ROW);
    }
  };

  return (
    <Box display="flex" height="100vh">
    <Box width={selectedOption ? '89%' : '25%'} bgcolor="primary" sx={{ transition: 'width 0.3s' }}>
      {selectedOption && <PanelContent id={selectedOption} type={type} />}
    </Box>
    <Box
      width={selectedOption ? '11%' : '75%'}
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
        <UserOptionWraper clickFunction={handleIconClick} FD={optionsFD} type={type} />
      </Container>
    </Box>
  </Box>
  )
}

export default UserPanel