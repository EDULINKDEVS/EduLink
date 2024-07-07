import * as React from "react";
import Box from "@mui/material/Box";
import AppAppBar from "@/components/home/navbar";
import Page from "@/components/home/Page";
import Slider from "../components/home/Slider";
import { Button, Grid } from "@mui/material";
import Pricing from "@/components/home/Pricing";
import CardFlip from "../components/CardFlip";
import SchoolIcon from '@mui/icons-material/School';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PricingCom from "@/components/home/PricingCom";
import Pricing1 from "@/components/home/Pricing1";



export default function Home() {
  return (
    <Box
    sx={{
      minHeight: "100vh",
      minWidth: "200px",
      maxWidth: "1200px",
      width: "80%",
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
          >
            <Page />
          </Grid>
          </Grid>

      </Box>
         
         
        <Box>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            marginTop={"90px"}
          >
            <Slider />
          </Grid>
         </Box> 
        
        
        <Box>
          <Grid container justifyContent={'center'}  sx={{
          minHeight:'70vh',
        }}>
          
          <Grid item xs={6} padding={2} display={'flex'} justifyContent={'center'}>
            <CardFlip
              frontIcon= {<SchoolIcon sx={{
                fontSize:'150px',
                transition: '.4s',
                cursor: 'pointer',
                position: 'absolute',
                top: 45,
                  '&:hover': {
                  transform: 'rotateZ(5deg) scale(1.3)',
                
                },

              }}
              />}
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
                height: '100%', // Sprawia, że kontener zajmuje całą wysokość karty
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <div style={{ marginBottom: 'auto', marginTop: '-100px' }}>ZAREJESTRUJ SIĘ UŻYWAJĄC KLAWISZA PONIŻEJ!</div>
                <Button variant="contained" sx={{
                  position: 'absolute',
                  bottom: -120, // Odstęp od dolnej krawędzi
                  fontSize: 20,
                  backgroundColor: 'white',
                  color: 'black',
                  '&:hover' : {
                    backgroundColor: '#A758B5',
                    color: 'white'
                  }
                 

                }}
                href="/register?type=student"
                >Rejestracja</Button>
              </div>}
            
            />
          </Grid>

          <Grid item xs={6} padding={2} display={'flex'} justifyContent={'center'}>
            <CardFlip
                frontIcon={<HandshakeIcon sx={{
                  fontSize: '150px',
                  transition: '.4s',
                  cursor: 'pointer',
                  position: 'absolute',
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
                  fontStyle: 'normal'
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
                    bottom: -120, // Odstęp od dolnej krawędzi
                    fontSize: 20,
                    backgroundColor: 'white',
                    color: 'black',
                    '&:hover' : {
                      backgroundColor: '#A758B5',
                      color: 'white'
                    }

                  }}
                  href="/regiistrationformcompany"
                  >Rejestracja</Button>
                </div>}
              />
            </Grid>

          </Grid>
        </Box>

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
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            marginTop={"90px"}
          >
            <Pricing />
          </Grid>
         </Box>

        <Box>
          <Grid 
           item
           xs={12}
           display={"flex"}
           justifyContent={"center"}
           marginTop={"90px"}
           >
            <PricingCom/>
           </Grid>
        </Box>


       </Box>
      
      
      
    );
  }