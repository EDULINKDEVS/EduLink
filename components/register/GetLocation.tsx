import React, { useEffect, useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

declare global {
  interface Window {
    google: any;
  }
}

const GetLocation: React.FC = () => {
  const [city, setCity] = useState('');

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

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const geocoder = new window.google.maps.Geocoder();
          const latlng = { lat: latitude, lng: longitude };

          geocoder.geocode({ location: latlng }, (results: any, status: any) => {
            if (status === 'OK') {
              if (results && results.length > 0) {
                const cityComponent = results[0].address_components.find((component: any) =>
                  component.types.includes('locality')
                );
                if (cityComponent) {
                  setCity(cityComponent.long_name);
                } else {
                  console.error('City not found in address components');
                }
              } else {
                console.error('No results found');
              }
            } else {
              console.error('Geocoder failed due to: ' + status);
            }
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Button
        variant="contained"
        startIcon={<LocationOnIcon />}
        onClick={handleLocationClick}
      >
        Use my location
      </Button>
      <TextField
        label="Enter city"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </Box>
  );
};

export default GetLocation;
