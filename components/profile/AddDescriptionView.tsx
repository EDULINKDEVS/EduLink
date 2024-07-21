import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import ShowAnim from '../helpers/ShowAnim';

const AddDescriptionView = ({ setSteps }: { setSteps: (value: number) => void }) => {
  return (
    <ShowAnim>

    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dodaj opis
        </Typography>
        <Typography variant="subtitle1" component="p" gutterBottom>
          Napisz coś o sobie. Wskaż swoje doświadczenie i mocne strony.
        </Typography>
        <Box
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
          />
        </Box>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button variant="contained" color="primary" onClick={() => setSteps(0)}>
            Wróć
          </Button>
          <Button variant="contained" color="primary">
            Zapisz opis
          </Button>
        </Box>
      </Box>
    </Container>
    </ShowAnim>
  );
};

export default AddDescriptionView;
