import React, { RefObject } from 'react';
import Box from "@mui/material/Box";
import AppAppBar from "@/components/home/navbar";
import Page from "@/components/home/Page";
import Slider from "@/components/home/Slider";
import { Button, Grid } from "@mui/material";
import Pricing from "@/components/home/Pricing";
import CardFlip from "@/components/CardFlip";
import SchoolIcon from '@mui/icons-material/School';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PricingCom from "@/components/home/PricingCom";
import Pricing1 from "@/components/home/Pricing1";

type IntroPageProps = {
  registerRef: RefObject<HTMLDivElement>;
};

const IntroPage: React.FC<IntroPageProps> = ({ registerRef }) => {
  return (
 <Grid container justifyContent={"center"} alignItems={"center"} display={'flex'}>

    <Grid item
        xs={12} 
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}>  
        <AppAppBar/>    
         </Grid>  


     <Grid item
        xs={12} 
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}>  
            <Page />
          </Grid>


     <Grid item  
        justifyContent={"center"} 
        alignItems={"center"}
        xs={12}
        sx={{
          minHeight:{
            xs: '200px',
            lg:'100vh'
            
          }
        }}
        minHeight={'100vh'}
        display={"flex"}
        >
          <Slider />
        </Grid>

        <Grid item xs={12} padding={2} display={'flex'} id="register" ref={registerRef} justifyContent={'center'}>
        <Grid container>
            <Grid item xs={12} lg={6} display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={'600px'}>
            <CardFlip
                frontIcon={<SchoolIcon sx={{
                fontSize: '150px',
                transition: '.4s',
                cursor: 'pointer',
                userSelect: 'none',
                top: 45,
                '&:hover': {
                  transform: 'rotateZ(5deg) scale(1.3)',
                }

              }}/>}
              
              frontText={<Box sx={{
                
                top: 25,
                fontSize: 25,
                position: 'relative',
                fontFamily: 'playfair-display, sans-serif',
                fontWeight: '700',
                fontStyle: 'normal',
              }}>
              
              JESTEM STUDENTEM SZUKAJĄCYM PRACODAWCY
              </Box>}
                backText={
                
                
                <Grid container 
                  sx={{
                width:'100%',
                height:'400px',
                }}>
                  <Grid item xs={12} height={'89%'} display={'flex'} justifyContent={'center'} flex={3} alignItems={'center'}>


                  <span>
                ZAREJESTRUJ SIĘ UŻYWAJĄC KLAWISZA PONIŻEJ!
                    </span>
                  </Grid>
                  <Grid item xs={12} flex={1}>

                <Button
                variant="contained"
                sx={{
                                  
                  fontSize: 20,

                  color: 'custom',
                  '&:hover': {
                    backgroundColor: 'primary',
                    color: 'secondary'
                  }
                }}
                href="/register/student"
                >Rejestracja</Button>
              </Grid>
                
              </Grid>}
              
              />
            </Grid>
            
            
            <Grid item s xs={12} lg={6} display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={'600px'}>
            <CardFlip
                frontIcon={<HandshakeIcon sx={{
                fontSize: '150px',
                transition: '.4s',
                cursor: 'pointer',
                userSelect: 'none',
                top: 45,
                '&:hover': {
                  transform: 'rotateZ(5deg) scale(1.3)',
                }

              }}/>}
              frontText={<Box sx={{
                top: 25,
                fontSize: 25,
                position: 'relative',
                fontFamily: 'playfair-display, sans-serif',
                fontWeight: '700',
                fontStyle: 'normal',
              }}>
              JESTEM PRACODAWCĄ SZUKAJĄCYM PRACOWNIKA
              </Box>}
              backText="du"
              />
            </Grid>
               

        </Grid>
        </Grid>


        <Grid item  
        justifyContent={"center"} 
        alignItems={"center"}
        xs={12}
        display={"flex"}
        >
          <Pricing1 />
        </Grid>

        <Grid item  
        justifyContent={"center"} 
        alignItems={"center"}
        xs={12}
        display={"flex"}
        >
          <Pricing />
        </Grid>





    </Grid>
    
    
  );
}

export default IntroPage;
