import { Box, Typography } from '@mui/material';
import React from 'react';

interface TwoColumnsProps {
  leftColumnText: string;
  rightColumnText: string;
}

const TwoColumns: React.FC<TwoColumnsProps> = ({ leftColumnText, rightColumnText }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 2, 
        padding: 3, 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        boxShadow: 2 
      }}
    >
      <Box sx={{ flex: 1, marginRight: 2 }}>
        <Typography component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
          {leftColumnText}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, marginLeft: 2 }}>
        <Typography component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
          {rightColumnText}
        </Typography>
      </Box>
    </Box>
  );
}

export default TwoColumns;
