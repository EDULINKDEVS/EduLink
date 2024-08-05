import { Box, Typography } from '@mui/material';
import React from 'react';

const OneColumn: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Box 
      sx={{ 
        margin: 2, 
        padding: 3, 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        boxShadow: 2,
        maxWidth: '80%'
      }}
    >
      <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        {text}
      </Typography>
    </Box>
  );
}

export default OneColumn;
