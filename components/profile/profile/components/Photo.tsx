import React, { useState, ChangeEvent } from 'react';
import { Box, Typography, Button } from '@mui/material';



const Photo = ({ brightness, b_radius, size, alt, path }: {brightness:number, b_radius:number,size:number, alt:string, path:string}) => {

  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center">
        <Box mt={2}>
          <img 
            src={path} 
            alt={alt} 
            style={{ 
              width: `${size}px`, 
              borderRadius: b_radius, 
              filter: `brightness(${brightness}%)` 
            }} 
          />
        </Box>
    </Box>
  );
};

export default Photo;
