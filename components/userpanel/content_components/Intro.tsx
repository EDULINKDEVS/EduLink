import React from 'react'
import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import UpgradeIcon from '@mui/icons-material/Upgrade';


function Intro() {
  




  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding="1rem" justifyContent="center">
      <Typography variant="h2" gutterBottom fontWeight="bold"> Witaj!
      </Typography>
      <Typography variant="h2" gutterBottom fontWeight="bold"> Łukasz Witt
      </Typography>
     
      <Box marginY= "8rem">
    
        <Typography marginY= "5rem" variant="h5" gutterBottom textAlign="center"> Nieprzeczytane wiadomości: 3
        </Typography>

        <Typography marginY= "2rem" variant="h5" gutterBottom textAlign="center">Aktualnie w ramach twojej subskrypcji pozostało Ci:
        </Typography>
        
        <Typography  variant="h5" gutterBottom textAlign="center">Wiadomości do wysłania:
        </Typography>
        
        <Typography variant="h5" gutterBottom textAlign="center">Zaczepki :
        </Typography>
        
        <Typography variant="h5" gutterBottom textAlign="center">Zmiana lokalizacji:
        </Typography>

        <Button variant="contained" color="secondary" startIcon={<UpgradeIcon/>}>
        Sprawdź co u nas się zmieniło!
      </Button>       
      </Box>
    </Box>
  )
}

export default Intro


