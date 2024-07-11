import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type userOptionType = {
  icon: ReactNode;
  text: string;
}

const Useroption = ({ icon, text }: userOptionType) => {
  return (
    <Box sx={{
      "&:hover": {
        ".icon-text": {
          visibility: 'visible',
          opacity: 1,
          
        },
       

      }
    }}>
      <Box className='optionBox' 
      sx={{
        borderRadius: "50%",
        border: "2px solid white",
        backgroundColor: '#A758B5',
        width: "115px",
        height: "95px",
        transition: "all .9s",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        position: 'relative',
        fontSize: '25px'
      }}>
        {icon}
     

        <Box
          className="icon-text"
          sx={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            color: '#A758B5',
            padding: '5px 10px',
            borderRadius: '5px',
            marginTop: '5px',
            whiteSpace: 'nowrap',
            visibility: 'hidden',
            opacity: 0,
            transition: 'visibility 0s, opacity 0.5s linear',
            fontSize: "18px",
            fontWeight: "600"
          }}
        >
          {text}
        </Box>
      </Box>
    </Box>
  )
}

export default Useroption;
