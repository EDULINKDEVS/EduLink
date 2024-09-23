import React, { ChangeEvent, useContext, useState, FocusEvent } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  MenuItem,
  useTheme
} from '@mui/material';
import { styled } from '@mui/system';
import * as Yup from 'yup';
import { RegisterContext } from '@/context/register/RegisterContext';
import { RegisterContextType } from '@/context/register/types';

const StyledPaper = styled(Paper)<{ theme: any }>(({ theme }) => ({
  margin: 'auto',
  width: 'clamp(200px,95%,500px)',
  backgroundColor: theme.palette.primary.light,
  boxShadow: 'none',
}));

const StyledButton = styled(Button)<{ theme: any }>(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.common.black,
  border: '1px solid #ECE3DC ',
  borderColor: theme.palette.primary.main,
  borderRadius: 4 , 
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  }
}));

const StyledTextField = styled(TextField)<{ theme: any }>(({ theme }) => ({
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
  },
  '& .MuiInputBase-input': {
    color: theme.palette.common.black,
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.common.black,
  },
}));

const ErrorText = styled(Typography)({
  color: 'red',
  textAlign: 'center',
  marginTop: 20,
});

const StudentPersonal = ({ setStep }: { setStep: (value: number) => void }) => {
  const theme = useTheme();
  const registerContext = useContext(RegisterContext) as RegisterContextType;
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [generalError, setGeneralError] = useState<string>('');
  
  const [birthDay, setBirthDay] = useState<string>('10');
  const [birthMonth, setBirthMonth] = useState<string>('10');
  const [birthYear, setBirthYear] = useState<string>('1998');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    registerContext.setRegisterData({
      ...registerContext.registerData,
      [name]: value
    });
  };

  const handleBlur = async (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    try {
      if (name === 'confirm_pass') {
        if (registerContext.registerData.pass !== value) {
          setErrors((prevErrors) => ({ ...prevErrors, confirm_pass: 'Hasła muszą być takie same' }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, confirm_pass: '' }));
        }
      } else {
        await validationSchema.validateAt(name, { [name]: value });
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
      }
    }
  };

  const validationSchema = Yup.object().shape({
    f_name: Yup.string().required('Imię jest wymagane'),
    l_name: Yup.string().required('Nazwisko jest wymagane'),
    phone: Yup.string().required('Nr telefonu jest wymagany'),
    email: Yup.string().email('Nieprawidłowy adres email').required('Adres email jest wymagany'),
    pass: Yup.string().required('Hasło jest wymagane').min(6, 'Hasło musi mieć co najmniej 6 znaków'),
    birthDay: Yup.number().required('Dzień urodzenia jest wymagany').min(1, 'Nieprawidłowy dzień').max(31, 'Nieprawidłowy dzień'),
    birthMonth: Yup.number().required('Miesiąc urodzenia jest wymagany').min(1, 'Nieprawidłowy miesiąc').max(12, 'Nieprawidłowy miesiąc'),
    birthYear: Yup.number().required('Rok urodzenia jest wymagany').min(new Date().getFullYear() - 100, 'Nieprawidłowy rok').max(new Date().getFullYear(), 'Nieprawidłowy rok')
  });

  const validate = async () => {
    try {
      const values = {
        f_name: registerContext.registerData.f_name,
        l_name: registerContext.registerData.l_name,
        phone: registerContext.registerData.phone,
        email: registerContext.registerData.email,
        pass: registerContext.registerData.pass,
        confirm_pass: registerContext.registerData.confirm_pass,
        birthDay: parseInt(birthDay, 10),
        birthMonth: parseInt(birthMonth, 10),
        birthYear: parseInt(birthYear, 10)
      };
      await validationSchema.validate(values, { abortEarly: false });
      if (values.pass !== values.confirm_pass) {
        setErrors((prevErrors) => ({ ...prevErrors, confirm_pass: 'Hasła muszą być takie same' }));
        setGeneralError('Uzupełnij poprawnie wszystkie pola');
      } else {
        setErrors({});
        setGeneralError('');
        return true;
      }
    } catch (err) {
      const newErrors: { [key: string]: string } = {};
      if (err instanceof Yup.ValidationError && err.inner) {
        err.inner.forEach((error) => {
          if (error.path) newErrors[error.path] = error.message;
        });
      }
      setErrors(newErrors);
      if (registerContext.registerData.pass !== registerContext.registerData.confirm_pass) {
        setErrors((prevErrors) => ({ ...prevErrors, confirm_pass: 'Hasła muszą być takie same' }));
        setGeneralError('Uzupełnij poprawnie wszystkie pola');
      }
      setGeneralError('Uzupełnij poprawnie wszystkie pola');
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await validate()) {
      const birthDate = new Date(parseInt(birthYear, 10), parseInt(birthMonth, 10) - 1, parseInt(birthDay, 10));
      registerContext.setRegisterData({
        ...registerContext.registerData,
        dateOfBirth: birthDate
      });
      setStep(1);
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <Box sx={{ animation: '.7s showAnimLev1 forwards'}}>
      <Box sx={{ backgroundColor: theme.palette.primary.light }}>
        <Typography variant="h4" color="black" align="center" gutterBottom fontWeight={'bold'}>
          REJESTRACJA
        </Typography>
        <StyledPaper theme={theme}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <StyledTextField
              fullWidth
              margin="normal"
              id="f_name"
              name="f_name"
              label="Imię"
              value={registerContext.registerData.f_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.f_name}
              helperText={errors.f_name}
              required
              theme={theme}
            />
            <StyledTextField
              fullWidth
              margin="normal"
              id="l_name"
              name="l_name"
              label="Nazwisko"
              value={registerContext.registerData.l_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.l_name}
              helperText={errors.l_name}
              required
              theme={theme}
            />
            <StyledTextField
              fullWidth
              margin="normal"
              type='password'
              id="password"
              name="pass"
              label="Hasło"
              value={registerContext.registerData.pass}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.pass}
              helperText={errors.pass}
              required
              theme={theme}
            />
            <StyledTextField
              fullWidth
              type='password'
              margin="normal"
              id="confirm_password"
              name="confirm_pass"
              label="Potwierdź hasło"
              value={registerContext.registerData.confirm_pass}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.confirm_pass}
              helperText={errors.confirm_pass}
              required
              theme={theme}
            />
            <StyledTextField
              fullWidth
              margin="normal"
              id="phone"
              name="phone"
              label="Nr telefonu"
              value={registerContext.registerData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.phone}
              helperText={errors.phone}
              required
              theme={theme}
            />
            <StyledTextField
              fullWidth
              margin="normal"
              id="email"
              name="email"
              label="Adres E-mail"
              value={registerContext.registerData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.email}
              helperText={errors.email}
              required
              theme={theme}
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
                  value={birthDay}
                  onChange={(e) => setBirthDay(e.target.value)}
                  onBlur={(e) => handleBlur(e as unknown as FocusEvent<HTMLInputElement | HTMLTextAreaElement>)}
                  error={!!errors.birthDay}
                  helperText={errors.birthDay}
                  required
                  theme={theme}
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
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(e.target.value)}
                  onBlur={(e) => handleBlur(e as unknown as FocusEvent<HTMLInputElement | HTMLTextAreaElement>)}
                  error={!!errors.birthMonth}
                  helperText={errors.birthMonth}
                  required
                  theme={theme}
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
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  onBlur={(e) => handleBlur(e as unknown as FocusEvent<HTMLInputElement | HTMLTextAreaElement>)}
                  error={!!errors.birthYear}
                  helperText={errors.birthYear}
                  required
                  theme={theme}
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
              <StyledButton type="submit" variant="outlined" theme={theme} sx={{backgroundColor: theme.palette.common.white,}}>
                Dalej
              </StyledButton>
            </Grid>
            {generalError && (
              <ErrorText variant="body2">
                {generalError}
              </ErrorText>
            )}
          </Box>
        </StyledPaper>
      </Box>
    </Box>
  );
};

export default StudentPersonal;
