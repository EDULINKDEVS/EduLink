import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  MenuItem
} from '@mui/material';
import { styled } from '@mui/system';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useRouter } from 'next/router'; // Użyj hooka useRouter do nawigacji

// Styled Components
const StyledContainer = styled(Box)({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'stretch', // Ustawienie elementów na całej wysokości
  justifyContent: 'center',
});

const LeftContainer = styled(Box)({
  flex: 1, // Połowa ekranu
  backgroundColor: '#A758B5', // Tło po lewej stronie
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
});

const RightContainer = styled(Box)({
  flex: 1, // Druga połowa ekranu
  backgroundColor: 'white', // Tło po prawej stronie
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const StyledPaper = styled(Paper)({
  padding: 20,
  width: '500px',
  backgroundColor: '#fff',
  boxShadow: 'none',
});

const StyledButton = styled(Button)({
  backgroundColor: '#A758B5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#9342a0'
  }
});

const StyledTextField = styled(TextField)({
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
  },
  '& .MuiInputBase-input': {
    color: '#A758B5',
  },
  '& .MuiInputLabel-root': {
    color: '#A758B5',
  },
});

const ErrorText = styled(Typography)({
  color: 'red',
  textAlign: 'center',
  marginTop: 20,
});

// Component
const RegistrationFormStudent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    birthDay: '',
    birthMonth: '',
    birthYear: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const router = useRouter(); // Użyj hooka useRouter do nawigacji

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: !value,
    });
  };

  const validate = () => {
    const newErrors: { [key: string]: boolean } = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData]) {
        newErrors[key] = true;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Jeśli walidacja zakończyła się sukcesem, przejdź do następnej strony
      router.push('/registrationformstudentstatus');
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <StyledContainer>
      {/* Lewa połowa ekranu */}
      <LeftContainer>
        <HandshakeIcon style={{ fontSize: 300, color: 'white' }} />
      </LeftContainer>

      {/* Prawa połowa ekranu */}
      <RightContainer>
        <Box>
          <Typography variant="h4" color="#A758B5" align="center" gutterBottom fontWeight={'bold'}>
            REJESTRACJA
          </Typography>
          <StyledPaper>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <StyledTextField
                fullWidth
                margin="normal"
                id="name"
                name="name"
                label="Imię"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                required
              />
              <StyledTextField
                fullWidth
                margin="normal"
                id="surname"
                name="surname"
                label="Nazwisko"
                value={formData.surname}
                onChange={handleChange}
                error={!!errors.surname}
                required
              />
              <StyledTextField
                fullWidth
                margin="normal"
                id="phone"
                name="phone"
                label="Nr telefonu"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                required
              />
               <StyledTextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="Adres E-mail"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                required
              />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <StyledTextField
                    select
                    fullWidth
                    margin="normal"
                    id="birthDay"
                    name="birthDay"
                    label="Dzień"
                    value={formData.birthDay}
                    onChange={handleChange}
                    error={!!errors.birthDay}
                    required
                  >
                    {days.map(day => (
                      <MenuItem key={day} value={day}>
                        {day}
                      </MenuItem>
                    ))}
                  </StyledTextField>
                </Grid>
                <Grid item xs={4}>
                  <StyledTextField
                    select
                    fullWidth
                    margin="normal"
                    id="birthMonth"
                    name="birthMonth"
                    label="Miesiąc"
                    value={formData.birthMonth}
                    onChange={handleChange}
                    error={!!errors.birthMonth}
                    required
                  >
                    {months.map(month => (
                      <MenuItem key={month} value={month}>
                        {month}
                      </MenuItem>
                    ))}
                  </StyledTextField>
                </Grid>
                <Grid item xs={4}>
                  <StyledTextField
                    select
                    fullWidth
                    margin="normal"
                    id="birthYear"
                    name="birthYear"
                    label="Rok"
                    value={formData.birthYear}
                    onChange={handleChange}
                    error={!!errors.birthYear}
                    required
                  >
                    {years.map(year => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </StyledTextField>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" marginTop={2}>
                <StyledButton type="submit" variant="contained">
                  Zarejestruj się
                </StyledButton>
              </Grid>
              {/* Wyświetlanie komunikatu o błędzie */}
              {Object.keys(errors).length > 0 && (
                <ErrorText variant="body2">
                  Proszę uzupełnić wszystkie pola.
                </ErrorText>
              )}
            </Box>
          </StyledPaper>
        </Box>
      </RightContainer>
    </StyledContainer>
  );
};

export default RegistrationFormStudent;
