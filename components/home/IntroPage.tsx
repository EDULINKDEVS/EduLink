import React, { RefObject } from 'react';
import Box from "@mui/material/Box";
import AppAppBar from "@/components/home/navbar";
import Page from "@/components/home/Page";
import Slider from './Slider';
import { Button, Grid } from "@mui/material";
import Pricing from "@/components/home/Pricing";
import CardFlip from '../CardFlip';
import SchoolIcon from '@mui/icons-material/School';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PricingCom from "@/components/home/PricingCom";
import Pricing1 from "@/components/home/Pricing1";

type IntroPageProps = {
  registerRef: RefObject<HTMLDivElement>;
};

const IntroPage: React.FC<IntroPageProps> = ({ registerRef }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "200px",
        width: "100%",
        mx: "auto",
      }}
    >
      <AppAppBar />
      <Box>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            maxWidth={"100%"}
            // bgcolor={'black'}
          >
            <Page />
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{marginTop: '140px'}}>
          <Slider />
      </Box> */}

      {/* <Box>
        <Grid container justifyContent={'center'} sx={{
          minHeight: {
            xs: '1100px',
            sm: '600px'
          },
        }}>
          <Grid item xs={12} sm={6} padding={2} display={'flex'} id="register" ref={registerRef} justifyContent={'center'}>
              <CardFlip
              frontIcon={<SchoolIcon sx={{
                fontSize: '150px',
                transition: '.4s',
                cursor: 'pointer',
                position: 'absolute',
                top: 45,
                '&:hover': {
                  transform: 'rotateZ(5deg) scale(1.3)',
                },
              }} />}
              frontText={"JESTEM STUDENTEM SZUKAJĄCYM PRACODAWCY"}
              path='/register/student'

            />
          </Grid>
          <Grid item xs={12} sm={6} padding={2} display={'flex'} justifyContent={'center'}>
            <CardFlip
              frontIcon={<HandshakeIcon sx={{
                fontSize: '150px',
                transition: '.4s',
                cursor: 'pointer',
                position: 'absolute',
                userSelect: 'none',
                top: 45,
                '&:hover': {
                  transform: 'rotateZ(5deg) scale(1.3)',
                }
              }} />}
              frontText={"JESTEM PRACODAWCĄ SZUKAJĄCYM PRACOWNIKA"}
              path='/register/company'
            />
          </Grid>
        </Grid>
      </Box> */}

      <Box>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          marginTop={"90px"}
        >
          <Pricing1 />
        </Grid>
      </Box>

      

      <Box>
        <Grid sx={{
          backgroundColor: 'white'
        }}
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          marginTop={"90px"}
          
        >
          <PricingCom />
        </Grid>
      </Box>
    </Box>
  );
}

export default IntroPage;
