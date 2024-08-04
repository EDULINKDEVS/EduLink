import * as React from "react";
import grafika from "../public/images/grafika2.webp";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import Background from "./Background";
import AnimW from "../AnimW";

const Page = () => {
  return (
    <Container id='page'>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >

        <Background path="/images/grafika3.webp" />
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
    </Container>
  );
};

export default Page;

