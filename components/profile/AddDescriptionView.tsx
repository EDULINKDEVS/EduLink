import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import ShowAnim from '../helpers/ShowAnim';

const AddDescriptionView = ({ setSteps }: { setSteps: (value: number) => void }) => {
  return (
    <ShowAnim>

    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography sx={{color:'secondary'}} variant="h4" component="h1" gutterBottom>
          Dodaj opis
        </Typography>
        <Typography sx={{color:'secondary'}} variant="subtitle1" component="p" gutterBottom>
          Napisz coś o sobie. Wskaż swoje doświadczenie i mocne strony.
        </Typography>
        <Box 
      sx={{
        color: 'secondary',
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
            color: 'secondary', // Kolor wpisywanego tekstu
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'secondary', // Kolor obramowania
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'secondary', // Kolor obramowania podczas hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'secondary', // Kolor obramowania podczas focus
            },
          },
        }}
        InputLabelProps={{
          sx: {
            color: 'secondary', // Kolor tekstu etykiety
            '&.Mui-focused': {
              color: 'secondary', // Kolor tekstu etykiety podczas focus
            },
          },
        }}
      />
    </Box>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button sx={{
            backgroundColor:'secondary', 
            color: 'primary', 
            fontWeight:"600",
            '&:hover' : {
                    backgroundColor: 'primary',
                    color: 'secondary' }
            
           }} variant="contained" onClick={() => setSteps(0)}>
            Wróć
          </Button>
          <Button
          sx={{
            backgroundColor:'secondary', 
            color: 'primary', 
            fontWeight:"600",
            '&:hover' : {
                    backgroundColor: 'primary',
                    color: 'secondary' }
            
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
