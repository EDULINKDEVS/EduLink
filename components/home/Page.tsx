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
import hand from "../public/images/hand.webp" ; 


const Page = () => {
  return (
    <Box sx={{
      height: "100vh",
      width: "100vw",
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      // gap: '50px  ',
      backgroundImage: 'url(/images/hand.webp)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
        
   

    </Box>
  );
};

export default Page;

