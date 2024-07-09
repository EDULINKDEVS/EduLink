import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { FaCog, FaEnvelope, FaSearch, FaCalendarAlt } from 'react-icons/fa';
type userOptionType= {
    icon: ReactNode;
    text: string;
}

const Useroption = ({icon, text}:userOptionType) => {
  return (
    <Box sx={{
        "&: hover" : {
              "*": {
                width: '200px',
                // borderRadius: '30px',
                // padding: '0 10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }


    }}>
            <Box sx={{
            borderRadius: "38px",
            border: "2px solid white",
            backgroundColor: '#A758B5',
            width: "75px",
            height: "75px",
            transition: "width 1s "
            
        }}>

            </Box>
        </Box>

  )}

export default Useroption