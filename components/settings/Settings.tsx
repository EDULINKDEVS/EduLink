import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Switch, FormControlLabel, Box, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const PurpleSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'rgba(167, 88, 181, 0.08)',
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Settings = () => {
  const theme = useTheme();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const [notifications, setNotifications] = useState({
    appStatus: false,
    jobOffersMail: false,
    jobOffersPhone: false,
    marketingMail: false,
    clientMarketingMail: false,
  });

  const handleSave = () => {
    console.log({
      firstName,
      lastName,
      school,
      birthDate,
      email,
    });
  };

  const validatePassword = (password: string) => {
    const criteria = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setPasswordCriteria(criteria);
    return criteria.length && criteria.uppercase && criteria.number && criteria.specialChar;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewPassword(value);
    validatePassword(value);
  };

  const handlePasswordSave = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError('Hasła się nie zgadzają');
    } else if (!validatePassword(newPassword)) {
      setPasswordError('Hasło nie spełnia wszystkich wymagań');
    } else {
      setPasswordError('');
      // Save new password logic here
      console.log('Password changed');
    }
  };

  const handleNotificationsSave = () => {
    // Save notifications settings logic here
    console.log('Notifications settings saved', notifications);
  };

  const handleNotificationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications({ ...notifications, [event.target.name]: event.target.checked });
  };

  return (
    <Container maxWidth="md" sx={{ opacity: 0, animation: '1s showAnimLev1 forwards' }}>
      <Paper elevation={3} style={{ padding: '2em', marginTop: '2em' }}>
        <Typography variant="h4" gutterBottom>
          Ustawienia Konta
        </Typography>
        <Typography variant="h6" marginY="1,5em">
          Aktualny abonament:
        </Typography>
        <Typography
          variant="h6"
          marginY="1.5em"
          onClick={() => setShowChangePassword(!showChangePassword)}
          style={{ cursor: 'pointer' }}
          sx={{
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          Zmień hasło
        </Typography>
        {showChangePassword && (
          <Grid container spacing={2} style={{ marginTop: '1em' }}>
            <Grid item xs={12}>
              <TextField
                label="Nowe hasło"
                type="password"
                fullWidth
                value={newPassword}
                onChange={handlePasswordChange}
                InputProps={{
                  sx: {
                    color: theme.palette.primary.dark, // Kolor wpisywanego tekstu
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.primary.main, // Kolor obramowania
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.primary.main, // Kolor obramowania podczas hover
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.primary.main, // Kolor obramowania podczas focus
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: theme.palette.primary.main, // Kolor tekstu etykiety
                    '&.Mui-focused': {
                      color: theme.palette.primary.main, // Kolor tekstu etykiety podczas focus
                    },
                  },
                }}
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Powtórz nowe hasło"
                type="password"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={passwordError !== ''}
                helperText={passwordError}
                InputProps={{
                  sx: {
                    color: theme.palette.primary.dark, // Kolor wpisywanego tekstu
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.primary.main, // Kolor obramowania
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.primary.main, // Kolor obramowania podczas hover
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.primary.main, // Kolor obramowania podczas focus
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: theme.palette.primary.main, // Kolor tekstu etykiety
                    '&.Mui-focused': {
                      color: theme.palette.primary.main, // Kolor tekstu etykiety podczas focus
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{
                  color: theme.palette.primary.light,
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
              color: theme.palette.primary.main,
              backgroundColor:theme.palette.primary.light}
                }}
                variant="contained"
                onClick={handlePasswordSave}
                disabled={!passwordCriteria.length || !passwordCriteria.uppercase || !passwordCriteria.number || !passwordCriteria.specialChar || newPassword !== confirmPassword}
              >
                Zapisz
              </Button>
            </Grid>
          </Grid>
        )}
        <Typography sx={{
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
          variant="h6"
          marginY="1.5em"
          onClick={() => setShowNotifications(!showNotifications)}
          style={{ cursor: 'pointer' }}
        >
          Zarządzaj powiadomieniami
        </Typography>
        {showNotifications && (
          <Grid container spacing={2} style={{ marginTop: '1em' }}>
            <Grid item xs={12}>
              <FormControlLabel
                sx={{ color: theme.palette.primary.dark }}
                control={<PurpleSwitch checked={notifications.appStatus} onChange={handleNotificationChange} name="appStatus" />}
                label="Chcę otrzymywać powiadomienia o statusie swoich aplikacji."
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<PurpleSwitch checked={notifications.jobOffersMail} onChange={handleNotificationChange} name="jobOffersMail" />}
                label="Chcę otrzymywać mailem rekomendowane oferty pracy."
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<PurpleSwitch checked={notifications.jobOffersPhone} onChange={handleNotificationChange} name="jobOffersPhone" />}
                label="Chcę otrzymywać telefonicznie rekomendowane oferty pracy."
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<PurpleSwitch checked={notifications.marketingMail} onChange={handleNotificationChange} name="marketingMail" />}
                label="Chcę otrzymywać mailem informacje marketingowe od EduLink.pl."
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<PurpleSwitch checked={notifications.clientMarketingMail} onChange={handleNotificationChange} name="clientMarketingMail" />}
                label="Chcę otrzymywać mailem informacje marketingowe o klientach Edulink.pl."
              />
            </Grid>
            <Grid item xs={12}>
              <Button sx={{
                backgroundColor:theme.palette.primary.main,
                color:theme.palette.primary.light,
                '&:hover': {
              color: theme.palette.primary.main,
              backgroundColor:theme.palette.primary.light
                }
              }} variant="contained" onClick={handleNotificationsSave}>
                Zapisz
              </Button>
            </Grid>
          </Grid>
        )}
        <Typography fontSize="12px" marginY="6em">
          Administratorem Twoich danych osobowych jest: EduLink Sp. Z O.O . z siedzibą w Warszawie, ul. Prosta 68, 00-838 Poznań; adres e-mail: pomoc@edulink.pl.
          W razie pytań skontaktuj się z nami: pomoc@edulink.pl lub naszym Inspektorem Ochrony Danych: iod@edulink.pl. Dowiedz się więcej
        </Typography>
      </Paper>
    </Container>
  );
};

export default Settings;
