import { Box, useTheme } from '@mui/material';
import React from 'react';

const Custom404 = () => {
  const theme = useTheme();
  return (
    <Box sx={{
        height: '100vh',
        width: '100%',
        fontSize: '3em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.primary.dark
    }}>
      Spierdalaj
    </Box>
  );
};

export default Custom404;
