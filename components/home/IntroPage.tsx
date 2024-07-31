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
    <Grid container justifyContent={"center"} alignItems={"center"}>
      
    <Grid item>
      <AppAppBar />
      </Grid>
     
      
          <Grid item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            maxWidth={"100%"}
          >
            <Page />
          </Grid>

     

      
    
        <Grid item  justifyContent={"center"} alignItems={"center"} sx={{
          minHeight: '100vh'
        }}
          xs={12}
          display={"flex"}
          marginTop={"90px"}
        >
          <Slider />
        </Grid>

      

      


          <Grid item xs={12} padding={2} display={'flex'} id="register" ref={registerRef} justifyContent={'center'} minHeight={'100vh'}>
            <Grid container>
              <Grid item xs={12}>
            <CardFlip
              frontIcon={<SchoolIcon sx={{
                fontSize: '150px',
                transition: '.4s',
                cursor: 'pointer',
                top: 45,
                '&:hover': {
                  transform: 'rotateZ(5deg) scale(1.3)',
                },
              }} />}
              frontText={<div style={{
                top: 95,
                fontSize: 25,
                position: 'relative',
                fontFamily: 'playfair-display, sans-serif',
                fontWeight: '700',
                fontStyle: 'normal',
              }}>JESTEM STUDENTEM SZUKAJĄCYM PRACODAWCY</div>}
              backText={<div style={{
                position: 'relative',
                fontSize: 25,
                fontFamily: 'playfair-display, sans-serif',
                fontWeight: '700',
                fontStyle: 'normal',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{ marginBottom: 'auto', marginTop: '-100px' }}>
                ZAREJESTRUJ SIĘ UŻYWAJĄC KLAWISZA PONIŻEJ!
              </Box>
              <Button
                variant="contained"
                sx={{
                  fontSize: 20,
                  backgroundColor: 'white',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#A758B5',
                    color: 'white'
                  }
                }}
                  href="/register/student"
                >Rejestracja</Button>
              </div>}
            />
         </Grid>

         <Grid item xs={12}>
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
              frontText={<div style={{
                top: 95,
                fontSize: 25,
                position: 'relative',
                fontFamily: 'playfair-display, sans-serif',
                fontWeight: '700',
                fontStyle: 'normal',
                userSelect: 'none'
              }}>JESTEM PRACODAWCĄ SZUKAJĄCYM PRACOWNIKA</div>}
              backText={<div style={{
                position: 'relative',
                fontSize: 25,
                fontFamily: 'playfair-display, sans-serif',
                fontWeight: '700',
                fontStyle: 'normal',
                height: '100%', // Sprawia, że kontener zajmuje całą wysokość karty
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <div style={{ marginBottom: 'auto', marginTop: '-100px' }}>ZAREJESTRUJ SIĘ UŻYWAJĄC KLAWISZA PONIŻEJ!</div>
                <Button variant="contained" sx={{
                  position: 'absolute',
                  fontSize: 20,
                  backgroundColor: 'white',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#A758B5',
                    color: 'white'
                  }
                }}
                  href="/register/company"
                >Rejestracja</Button>
              </div>}
            />
            </Grid>
            </Grid>
          </Grid>


      

      
        <Grid item sx={{ minHeight: '10vh'}}
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          marginTop={"90px"}
        >
          <Pricing1 />
        </Grid>
      

        <Grid  item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          marginTop={"90px"}
        >
          <Pricing />
        </Grid>
     

      
        <Grid item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          marginTop={"90px"}
        >
          <PricingCom />
        </Grid>
      
      </Grid>
  );
}

export default IntroPage;
