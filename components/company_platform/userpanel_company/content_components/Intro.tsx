import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import UpgradeIcon from '@mui/icons-material/Upgrade';

function Intro() {
  return (
    <Box  display="flex" flexDirection="column" alignItems="center" padding="1rem" justifyContent="center" height="100vh">
      <Typography variant="h2" gutterBottom fontWeight="bold"> Witaj!</Typography>
      <Typography variant="h2" gutterBottom fontWeight="bold"> Łukasz Witt</Typography>
      <Box marginY="1rem">
        <Typography marginY="5rem" variant="h5" gutterBottom textAlign="center">
          Nieprzeczytane wiadomości: 3
        </Typography>
        <Typography marginY="2rem" variant="h5" gutterBottom textAlign="center">
          Aktualnie w ramach twojej subskrypcji pozostało Ci:
        </Typography>
        <Typography variant="h5" gutterBottom textAlign="center">
          Wiadomości do wysłania:
        </Typography>
        <Typography variant="h5" gutterBottom textAlign="center">
          Zaczepki :
        </Typography>
        <Typography variant="h5" gutterBottom textAlign="center">
          Zmiana lokalizacji:
        </Typography>
        <Box marginY="7rem" display="flex" justifyContent="center">
          <Button className='ubuntu-medium'
            variant="contained"
            startIcon={<UpgradeIcon />}
            sx={{
              backgroundColor: '#A758B5',
              borderColor: 'black',
              border: 'solid',
              '&:hover': {
                backgroundColor: '#ffffff',
                color: '#000000',
              },
              color: '#ffffff'
            }}
          >
            Sprawdź co u nas się zmieniło!
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Intro;
