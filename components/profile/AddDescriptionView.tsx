import React from 'react';
import { Container, Typography, Box, TextField, Button, useTheme } from '@mui/material';
import ShowAnim from '../helpers/ShowAnim';

const AddDescriptionView = ({ setSteps }: { setSteps: (value: number) => void }) => {
  const theme = useTheme();
  return (
    <ShowAnim>

    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography sx={{color:theme.palette.primary.light}} variant="h4" component="h1" gutterBottom>
          Dodaj opis
        </Typography>
        <Typography sx={{color:theme.palette.primary.light}} variant="subtitle1" component="p" gutterBottom>
          Napisz coś o sobie. Wskaż swoje doświadczenie i mocne strony.
        </Typography>
        <Box 
      sx={{
        color: theme.palette.primary.light,
        borderColor: "secondary",
      }}
      mt={4}
      mb={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TextField
        label="Twój opis"
        multiline
        rows={8}
        variant="outlined"
        fullWidth
        InputProps={{
          sx: {
            color: theme.palette.primary.light, // Kolor wpisywanego tekstu
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light, // Kolor obramowania
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light, // Kolor obramowania podczas hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light, // Kolor obramowania podczas focus
            },
          },
        }}
        InputLabelProps={{
          sx: {
            color: theme.palette.primary.light, // Kolor tekstu etykiety
            '&.Mui-focused': {
              color: theme.palette.primary.light, // Kolor tekstu etykiety podczas focus
            },
          },
        }}
      />
    </Box>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button sx={{
            backgroundColor:theme.palette.primary.light, 
            color: theme.palette.primary.main, 
            fontWeight:"600",
            '&:hover' : {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.light }
            
           }} variant="contained" onClick={() => setSteps(0)}>
            Wróć
          </Button>
          <Button
          sx={{
            backgroundColor:theme.palette.primary.light, 
            color: theme.palette.primary.main, 
            fontWeight:"600",
            '&:hover' : {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.light }
            
           }} variant="contained" color="primary">
            Zapisz opis
          </Button>
        </Box>
      </Box>
    </Container>
    </ShowAnim>
  );
};

export default AddDescriptionView;
