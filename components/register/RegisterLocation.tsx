import { Box, Button, CircularProgress, useTheme } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import GetLocation from './GetLocation'; 
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { RegisterContext } from '@/context/register/RegisterContext';

const RegisterLocation: React.FC = () => {
  const registerContext = useContext(RegisterContext);
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  const StyledButton = styled(Button)({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    marginTop: '15px',
    '&:hover': {
      backgroundColor: '#9342a0'
    }
  });

  const handleClickRegister = async () => {
    setLoading(true);
    await registerContext?.registerUser();
    setLoading(false);
  };

  return (
    <Container>
      <GetLocation />
      <StyledButton
        fullWidth
        type="submit"
        variant="contained"
        onClick={handleClickRegister}
        disabled={loading} // Disable button while loading
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Zarejestruj"
        )}
      </StyledButton>
    </Container>
  );
};

export default RegisterLocation;
