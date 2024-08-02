import { Box, Button, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GetLocation from './GetLocation'; 
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

const RegisterLocation: React.FC = () => {
  const theme = useTheme();
  const StyledButton = styled(Button)({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    marginTop: '15px',
    '&:hover': {
      backgroundColor: '#9342a0'
    }
  });

  return (
    <Container>
      <GetLocation />
      <StyledButton fullWidth type="submit" variant="contained">
                Zarejestruj
      </StyledButton>
    </Container>
  );
};

export default RegisterLocation;