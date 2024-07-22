import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';
import styled from 'styled-components';
import HandshakeIcon from '@mui/icons-material/Handshake';

const StyledContainer = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const LeftContainer = styled(Box)`
  flex: 1;
  background-color: #A758B5;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1200px) {
    display: flex;
  }
`;

const RightContainer = styled(Box)`
  flex: 1.5;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  width: 500px;
  background-color: #fff;
  box-shadow: none;
`;

const StyledButton = styled(Button)`
  background-color: #A758B5;
  color: #fff;
  &:hover {
    background-color: #9342a0;
  }
`;

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A758B5',
  },
  '& label': {
    color: '#A758B5', // Kolor etykiety
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#A758B5',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#A758B5',
    },
    '&:hover fieldset': {
      borderColor: '#A758B5',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#A758B5',
    },
    '& input': {
      color: '#A758B5',
    }
  },
  '& .MuiInputBase-input': {
    color: '#A758B5',
  },
});

const CompanyRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    nip: '',
    street: '',
    postalCode: '',
    city: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'password') {
      setPasswordCriteria({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        number: /[0-9]/.test(value),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const isPasswordValid = Object.values(passwordCriteria).every(Boolean);

  return (
    <StyledContainer>
      <LeftContainer>
        <Typography variant="h1" style={{ color: 'white' }}>
          <HandshakeIcon sx={{ fontSize: '300px' }} />
        </Typography>
      </LeftContainer>
      <RightContainer>
        <StyledPaper>
          <Typography variant="h4" color="#A758B5" align="center" gutterBottom fontWeight={'bold'}>
            REJESTRACJA
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <CustomTextField 
              fullWidth
              margin="normal"
              id="companyName"
              name="companyName"
              label="NAZWA FIRMY"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <CustomTextField
              fullWidth
              margin="normal"
              id="nip"
              name="nip"
              label="NIP"
              value={formData.nip}
              onChange={handleChange}
              required
            />
            <CustomTextField
              fullWidth
              margin="normal"
              id="street"
              name="street"
              label="Ulica"
              value={formData.street}
              onChange={handleChange}
              required
            />
            <CustomTextField
              fullWidth
              margin="normal"
              id="postalCode"
              name="postalCode"
              label="Kod Pocztowy"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <CustomTextField
              fullWidth
              margin="normal"
              id="city"
              name="city"
              label="Miasto"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <CustomTextField
              fullWidth
              margin="normal"
              id="password"
              name="password"
              label="Hasło"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <CustomTextField
              fullWidth
              margin="normal"
              id="confirmPassword"
              name="confirmPassword"
              label="Powtórz Hasło"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <Box mt={2}>
              <Typography color={passwordCriteria.length ? 'green' : 'red'}>
                {passwordCriteria.length ? '✔' : '✘'} Minimum 8 znaków
              </Typography>
              <Typography color={passwordCriteria.uppercase ? 'green' : 'red'}>
                {passwordCriteria.uppercase ? '✔' : '✘'} Minimum jedna duża litera
              </Typography>
              <Typography color={passwordCriteria.number ? 'green' : 'red'}>
                {passwordCriteria.number ? '✔' : '✘'} Minimum jedna cyfra
              </Typography>
              <Typography color={passwordCriteria.specialChar ? 'green' : 'red'}>
                {passwordCriteria.specialChar ? '✔' : '✘'} Minimum jeden znak specjalny
              </Typography>
            </Box>
            <Grid container justifyContent="center" marginTop={2}>
              <StyledButton type="submit" variant="contained" disabled={!isPasswordValid || formData.password !== formData.confirmPassword}>
                Zarejestruj
              </StyledButton>
            </Grid>
          </Box>
        </StyledPaper>
      </RightContainer>
    </StyledContainer>
  );
};

export default CompanyRegister;
