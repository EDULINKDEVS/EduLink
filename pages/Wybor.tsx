import React from 'react';
import { Box , Button} from '@mui/material';

function Wybor() {
  return (
  <Box sx={{
    height: "100vh",
      width: "100vw",
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      gap: '20px'
  }} >
    <Button sx={{
      width: "120px",  padding: "10px"  }} variant= 'contained' href='/register/student'
    > 
        Student
    </Button>

    <Button sx={{
      width: "120px",  padding: "10px"  }} variant= 'contained' href='/register/company' > 
      Firma
      </Button>
  </Box>
  )
}

export default Wybor