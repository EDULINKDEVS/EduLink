import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        {/* Górna fioletowa sekcja */}
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: '#A758B5',
            height: '12.5vh' // 12.5% wysokości ekranu
          }}
        />
        <Grid container sx={{ height: '75vh' }}>
          {/* Lewa fioletowa sekcja */}
          <Grid
            item
            xs={false}
            sm={false}
            md={4.5}
            sx={{
              backgroundColor: '#A758B5'
            }}
          />
          {/* Sekcja logowania */}
          <Grid item xs={12} sm={12} md={3} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: 'auto',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Logowanie
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Adres Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#A758B5', // fioletowy kolor obramówki
                      },
                      '&:hover fieldset': {
                        borderColor: '#A758B5',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#A758B5',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#A758B5', // fioletowy kolor etykiety
                      '&.Mui-focused': {
                        color: '#A758B5',
                      },
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Hasło"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#A758B5', // fioletowy kolor obramówki
                      },
                      '&:hover fieldset': {
                        borderColor: '#A758B5',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#A758B5',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#A758B5', // fioletowy kolor etykiety
                      '&.Mui-focused': {
                        color: '#A758B5',
                      },
                    },
                  }}
                />
                <FormControlLabel 
                  control={<Checkbox value="remember" color="secondary" />}
                  label="Zapamiętaj mnie"
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      color: '#A758B5', // fioletowy kolor tekstu
                    },
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ 
                    mt: 3, 
                    mb: 2, 
                    backgroundColor: '#9C27B0',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#9C27B0',
                    },
                  }}
                >
                  Zaloguj się
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" sx={{ color: '#A758B5', textDecoration: 'none' }}>
                      Zapomniałeś hasła?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2" sx={{ color: '#A758B5', textDecoration: 'none' }}>
                      {'Nie masz jeszcze konta? Zarejestruj się'}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
          {/* Prawa fioletowa sekcja */}
          <Grid
            item
            xs={false}
            sm={false}
            md={4.5}
            sx={{
              backgroundColor: '#A758B5'
            }}
          />
        </Grid>
        {/* Dolna fioletowa sekcja */}
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: '#A758B5',
            height: '12.5vh' // 12.5% wysokości ekranu
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
