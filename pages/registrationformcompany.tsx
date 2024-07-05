import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper
} from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Box)({
  height: '100vh',
  width: '100wh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
});

const StyledPaper = styled(Paper)({
  padding: 20,
  width: '500px',
  backgroundColor: '#fff',
  // boxShadow: '0 0 10px 50px rgba(147, 66, 160)', // Zmieniony kolor cienia

});

const StyledButton = styled(Button)({
  backgroundColor: '#A758B5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#9342a0'
  }
});

// Component
const RegistrationFormCompany: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    nip: '',
    street: '',
    postalCode: '',
    city: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tutaj można dodać logikę do wysyłania danych do bazy danych
    console.log(formData);
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" color="#A758B5" align="center" gutterBottom fontWeight={'bold'}>
          REJESTRACJA
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            margin="normal"
            id="companyName"
            name="companyName"
            label="NAZWA FIRMY"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="nip"
            name="nip"
            label="NIP"
            value={formData.nip}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="street"
            name="street"
            label="Ulica"
            value={formData.street}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="postalCode"
            name="postalCode"
            label="Kod Pocztowy"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="city"
            name="city"
            label="Miasto"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <Grid container justifyContent="center" marginTop={2}>
            <StyledButton type="submit" variant="contained">
              Zarejestruj
            </StyledButton>
          </Grid>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default RegistrationFormCompany;
