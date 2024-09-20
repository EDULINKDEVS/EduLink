
import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useTheme } from '@mui/material';

const Footer = () => {
  return (
    <Box
      
      sx={{
        backgroundColor: 'theme.palette.primary.main',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginBottom: '20px',
        }}
      >
        {/* Sekcja Nawigacji */}
        <Box sx={{ margin: '10px' }}>
          <Typography sx={{ fontWeight: 'bold', color: '#a0744b', marginBottom: '10px', fontSize: "30px" }}>
            NAWIGACJA
          </Typography>
          <Box sx={{
            fontSize: "200px"
          }}>
            <Typography sx={{fontSize: "20px"}}>Strona główna</Typography>
            <Typography sx={{fontSize: "20px"}}>O Nas</Typography>
            <Typography sx={{fontSize: "20px"}}>Dlaczego my</Typography>
            <Typography sx={{fontSize: "20px"}}>Płatności</Typography>
          </Box>
        </Box>

        {/* Sekcja Kontakt */}
        <Box sx={{ margin: '10px' }}>
          <Typography  sx={{ fontWeight: 'bold', color: '#a0744b', marginBottom: '10px',fontSize: "30px" }}>
            KONTAKT
          </Typography>
          <Typography sx={{fontSize: "20px"}}>+48 727938202</Typography>
          <Typography sx={{fontSize: "20px"}}>kontakt@follwell.pl</Typography>
        </Box>

        {/* Sekcja Social Media */}
        <Box sx={{ margin: '10px' }}>
          <Typography  sx={{ fontWeight: 'bold', color: '#a0744b', marginBottom: '10px', fontSize: "30px" }}>
            SOCIAL MEDIA
          </Typography>
          <Box>
            <IconButton aria-label="LinkedIn" sx={{ color: '#000', }}>
              <LinkedInIcon sx={{fontSize:"60px"}}/>
            </IconButton>
            <IconButton aria-label="Instagram" sx={{ color: '#000' }}>
              <InstagramIcon sx={{fontSize:"60px"}} />
            </IconButton>
            <IconButton aria-label="Facebook" sx={{ color: '#000' }}>
              <FacebookIcon sx={{fontSize:"60px"}} />
            </IconButton>
          </Box>
        </Box>

      </Box>

      {/* Dolne Linki */}
      <Box
        sx={{
          borderTop: '1px solid #000',
          paddingTop: '10px',
          display: 'flex',
          justifyContent: 'center',
          gap: '180px',
          flexWrap: 'wrap',
          
        }}
      >
        <Typography sx={{fontSize: "20px"}}>Regulamin</Typography>
        <Typography sx={{fontSize: "20px"}}>Polityka prywatności</Typography>
        <Typography sx={{fontSize: "20px"}}>Polityka plików cookies</Typography>
        <Typography sx={{fontSize: "20px"}}>Ustawienia plików cookies</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
