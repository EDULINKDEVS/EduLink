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
import IntroOptionElement from "./IntroOptionElement";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
const Page = () => {
  return (
    <Box sx={{
      height: "100vh",
      width: "100vw",
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '50px  ',
    }}>

      <Box fontSize={"4em"}>

        <AnimW value="FOLLWELL" tempo={.1}/>
      </Box>
      <Box width={'30%'}>
        <hr />
      </Box>
      <Grid container>

        <Grid item xs={12} sm={4} justifyContent={'center'} display={'flex'} alignItems={'center'}>
          <IntroOptionElement value="Rejestracja" icon={<AppRegistrationIcon sx={{ fontSize: '2em' }} />} />

        </Grid>
        <Grid item xs={12} sm={4} justifyContent={'center'} alignItems={'center'}>
          <IntroOptionElement value="Zobacz oferty" icon={<WorkOutlineIcon sx={{ fontSize: '2em' }} />} />

        </Grid>
        <Grid item xs={12} sm={4} justifyContent={'center'} alignItems={'center'}>
          <IntroOptionElement value="Logowanie" icon={<HowToRegIcon sx={{ fontSize: '2em' }} />} />

        </Grid>
      </Grid>
      <Box width={'50%'}>
        <hr />
      </Box>
      <Box fontSize={"3em"}>
        <AnimW value="Twój portal z ofertami pracy" defaultDuration={1} tempo={.05}/>
      </Box>

    </Box>
  );
};

export default Page;

