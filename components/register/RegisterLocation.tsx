import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import GetLocation from './GetLocation'; // Poprawna ścieżka do komponentu
import { Container, Typography } from '@mui/material';

const RegisterLocation: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (!window.google) {
        console.error('Google Maps JavaScript API failed to load');
      }
    };
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Location Form
      </Typography>
      <GetLocation />
    </Container>
  );
};

export default RegisterLocation;
