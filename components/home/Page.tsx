import * as React from "react";
import grafika from "../public/images/grafika2.webp";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import Background from "./Background";
import AnimW from "../AnimW";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
const Page = () => {
  return (
    <Container id='page'>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >

        <Background path="/images/bg3.jpg" />
        
      </Box>
      <Box
        sx={{
          color: 'white',
          zIndex: 102,
          fontSize: {xs: '1.4em', lg:'4em'},
          fontStyle: 'italic',
          fontWeight: '200',
          
          position: 'absolute',
          top: {lg:'400px', xs:'200px'},
          padding: '30px',
          left:0,
          width:'100%',
          display: 'flex',
          justifyContent: 'center',
          '&:before': {
            opacity: '1',
              animation: '2s showSH forwards',
              position: 'absolute',
              width: '100vw',
              height: '100%',
              content: '""',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              top: 0,        
        }
        
        
          
        }}
      >
        <AnimW value="Praca na którą zasługujesz" />

      </Box>
      <Box sx={{
        position: 'absolute',
        top: 640,
        zIndex: 200,
        color:'white',
        width:'400px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        animation: '1s 2s showJoin forwards',
        left: '50%',
        opacity: '0',
        backgroundColor: 'rgba(0, 0, 0, .4)',
        cursor: 'pointer',
        transition: ' .5s',
        boxShadow: '0 0 100px 20px black',
        '&:hover':{
          boxShadow: '0 0 100px 20px white',

        }
      }}>
    <Stack sx={{

    }}
        direction="column" alignItems="center">
      <IconButton color="primary">
        <BusinessCenterIcon sx={{        
      fontSize: '4em',
      transform:'scale(1.5)',
      
      color: 'white',

      }} />
      </IconButton>
      <Typography variant="caption"sx={{        
      fontSize: '2em',
      }} >Dołącz do nas</Typography>
    </Stack>

      </Box>
    </Container>
  );
};

export default Page;

