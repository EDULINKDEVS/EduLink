import { Box, Typography } from '@mui/material';
import React from 'react';

interface OneColumnWithHeaderProps {
  header: string;
  text: string;
}

const OneColumnWithHeader: React.FC<OneColumnWithHeaderProps> = ({ header, text }) => {
  return (
    <Box 
      sx={{ 
        margin: 2, 
        padding: 3, 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        boxShadow: 2 
      }}
    >
      <Typography variant="h5" gutterBottom>
        {header}
      </Typography>
      <Typography component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
        {text}
      </Typography>
    </Box>
  );
}

export default OneColumnWithHeader;
