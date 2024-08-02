import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid, Paper, useTheme } from '@mui/material';
import styled from 'styled-components';
import HandshakeIcon from '@mui/icons-material/Handshake';



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

  const [locationData, setLocationData] = useState({
    city: '',
    street: '',
    postalCode: '',
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

  const handleCheckLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDu6wZWXYrGz49gKt628sNbzLbwtN7_jQE`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          const addressComponents = data.results[0].address_components;
          const city = addressComponents.find((component: any) => component.types.includes("locality"))?.long_name || '';
          const street = addressComponents.find((component: any) => component.types.includes("route"))?.long_name || '';
          const postalCode = addressComponents.find((component: any) => component.types.includes("postal_code"))?.long_name || '';
          
          setLocationData({ city, street, postalCode });
        }
      });
    }
  };

  const isPasswordValid = Object.values(passwordCriteria).every(Boolean);
  const theme = useTheme();
  const StyledContainer = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;
  justify-content: center;
  overflow: auto;
`;

const LeftContainer = styled(Box)`
  flex: 1;
  background-color: primary;
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
  background-color: secondary;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  width: 500px;
  background-color: #fff;
  box-shadow: none;
`;

const StyledButton = styled(Button)`
  background-color: primary;
  color: #fff;
  &:hover {
    background-color: #9342a0;
  }
`;

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& label': {
    color: theme.palette.primary.main, // Kolor etykiety
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '& input': {
      color: theme.palette.primary.main,
    }
  },
  '& .MuiInputBase-input': {
    color: theme.palette.primary.main,
  },
});
  return (
    <StyledContainer>
      <LeftContainer>
        <Typography variant="h1" style={{ color: theme.palette.primary.light }}>
          <HandshakeIcon sx={{ fontSize: '300px' }} />
        </Typography>
      </LeftContainer>
      <RightContainer>
        <StyledPaper>
          <Typography variant="h4" color="primary" align="center" gutterBottom fontWeight={'bold'}>
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
              <StyledButton variant="contained" onClick={handleCheckLocation}>
                Sprawdź lokalizację
              </StyledButton>
            </Grid>
            {locationData.city && (
              <Box mt={2}>
                <CustomTextField
                  fullWidth
                  margin="normal"
                  id="locatedCity"
                  name="locatedCity"
                  label="Miasto"
                  value={locationData.city}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <CustomTextField
                  fullWidth
                  margin="normal"
                  id="locatedStreet"
                  name="locatedStreet"
                  label="Ulica"
                  value={locationData.street}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <CustomTextField
                  fullWidth
                  margin="normal"
                  id="locatedPostalCode"
                  name="locatedPostalCode"
                  label="Kod Pocztowy"
                  value={locationData.postalCode}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
            )}
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
