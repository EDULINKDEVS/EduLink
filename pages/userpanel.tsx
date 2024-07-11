import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { FaCog, FaEnvelope, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import { styled } from '@mui/system';
import UserOptionWraper from '@/components/userpanel/nav/UserOptionWraper';

const options = [
  { icon: <FaCog />, label: 'Ustawienia' },
  { icon: <FaEnvelope />, label: 'Wiadomości' },
  { icon: <FaSearch />, label: 'Szukaj ofert' },
  { icon: <FaCalendarAlt />, label: 'Kalendarz eventów' },
  { icon: null, label: '' }, // Pusta opcja
];

const CircularContainer = styled(Box)({
  position: 'relative',
  width: '300px',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const CircularItem = styled(Box)<{ expanded: boolean }>(({ expanded }) => ({
  position: 'absolute',
  width: expanded ? 'auto' : '60px',
  height: '60px',
  borderRadius: expanded ? '30px' : '50%',
  backgroundColor: '#A758B5',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'width 0.3s, height 0.3s, border-radius 0.3s',
  padding: expanded ? '0 10px' : '0',
  '&:hover': {
    width: 'auto',
    height: '60px',
    borderRadius: '30px',
    padding: '0 10px',
  },
  '&:hover > div': {
    display: 'flex',
  },
}));

const IconLabel = styled(Box)({
  display: 'none',
  alignItems: 'center',
  color: 'white',
  marginLeft: '8px',
});

const PanelContent = ({ label }: { label: string }) => (
  <Box p={2}>
    <Typography variant="h6" color="white">{label}</Typography>
    {/* Dodaj tutaj treść odpowiedniego panelu */}
  </Box>
);

const UserPanel: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleIconClick = (label: string) => {
    setSelectedOption(label);
  };

  return (
    <Box display="flex" height="100vh">
      {/* Kontener główny z flexbox na całą wysokość ekranu */}
      <Box width={selectedOption ? '90%' : '25%'} bgcolor="#A758B5" sx={{ transition: 'width 0.3s' }}>
        {/* Lewa sekcja zajmująca 1/4 szerokości ekranu z tłem koloru #A758B5 */}
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
        {/* Prawa sekcja zajmująca 3/4 szerokości ekranu z białym tłem */}
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
          {/* <CircularContainer sx={{ display: selectedOption ? 'none' : 'flex' }}>
            {options.map((option, index) => {
              const angle = (index / options.length) * 2 * Math.PI;
              const x = 150 + 100 * Math.cos(angle) - 30; // 150 to połowa szerokości kontenera, 100 to promień okręgu, 30 to połowa szerokości kółka
              const y = 150 + 100 * Math.sin(angle) - 30; // 150 to połowa wysokości kontenera, 100 to promień okręgu, 30 to połowa wysokości kółka
              return (
                <CircularItem
                  key={index}
                  style={{ top: `${y}px`, left: `${x}px` }}
                  onClick={() => handleIconClick(option.label)}
                  expanded={false}
                >
                  {option.icon && (
                    <Box display="flex" alignItems="center">
                      {option.icon}
                      <IconLabel>
                        <Typography   variant="caption">{option.label}</Typography>
                      </IconLabel>
                    </Box>
                  )}
                </CircularItem>
              );
            })}
          </CircularContainer> */}
           <UserOptionWraper  />

          {selectedOption && (
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {options.map((option, index) => (
                <CircularItem
                  key={index}
                  onClick={() => handleIconClick(option.label)}
                  expanded={false}
                  sx={{ position: 'static', margin: '10px 0' }}
                >
                  {option.icon && (
                    <Box display="flex" alignItems="center">
                      {option.icon}
                    </Box>
                  )}
                </CircularItem>
              ))}
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default UserPanel;
