import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GetLocation from './GetLocation'; 
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

const RegisterLocation: React.FC = () => {
  const StyledButton = styled(Button)({
    backgroundColor: 'primary',
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