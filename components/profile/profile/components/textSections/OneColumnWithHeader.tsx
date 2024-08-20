import { Box, Typography } from '@mui/material';
import React from 'react';

interface OneColumnWithHeaderProps {
  header: string;
  header_font_size: number;
  text: string;
  text_font_size: number;
}

const OneColumnWithHeader: React.FC<OneColumnWithHeaderProps> = ({ header, header_font_size, text, text_font_size }) => {
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
      <Typography variant="h5" gutterBottom sx={{fontSize: header_font_size}}>
        {header}
      </Typography>
      <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', fontSize: text_font_size }}>
        {text}
      </Typography>
    </Box>
  );
}

export default OneColumnWithHeader;
