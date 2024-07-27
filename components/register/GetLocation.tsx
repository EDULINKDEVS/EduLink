import { Box, IconButton, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const GetLocation = () => {
  const [city, setCity] = useState('');
  const mapRef = useRef<HTMLDivElement>(null);
  const [loadInfo, setLoadInfo] = useState(false);
  const scriptLoadedRef = useRef(false);
  const mapInstanceRef = useRef<google.maps.Map | null>(null); // Ref do przechowywania instancji mapy

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (scriptLoadedRef.current) {
        setLoadInfo(true);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        scriptLoadedRef.current = true;
        setLoadInfo(true);
      };

      script.onerror = () => {
        console.error('Błąd podczas ładowania skryptu Google Maps');
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    loadGoogleMapsScript();
  }, []);

  useEffect(() => {
    if (loadInfo && window.google && mapRef.current) {
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        disableDefaultUI: true, 
      });
    }
  }, [loadInfo]);
  const isOk = () => {
    if (city === '') {
      alert('Problem ze zlokalizowaniem. Sprawdź ustawienia przeglądarki');
    }
  }
  const handleLocationClick = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const geocoder = new window.google.maps.Geocoder();
          const latlng = { lat: latitude, lng: longitude };

          geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === 'OK') {
              if (results && results.length > 0) {
                const cityComponent = results[0].address_components.find((component) =>
                  component.types.includes('locality')
                );
                if (cityComponent) {
                  setCity(cityComponent.long_name);
                  if (mapRef.current) {
                    mapRef.current.style.height = '400px';
                    if (mapInstanceRef.current) {
                      mapInstanceRef.current.setCenter(latlng);
                      mapInstanceRef.current.setZoom(12);
                    }
                  }
                } else {
                  console.error('Nie znaleziono miasta w komponentach adresowych');
                }
              } else {
                console.error('Nie znaleziono wyników');
              }
            } else {
              console.error('Geokoder nie powiódł się z powodu: ' + status);
            }
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert('Geolokalizacja nie jest wspierana przez tę przeglądarkę.');
    }

    // await new Promise(resolve => setTimeout(resolve, 5000)).then(()=>{
    //   isOk();
    // });

   
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,  width: '300px' }}>
      {loadInfo && (
        <IconButton
          color="primary"
          aria-label="lokalizuj"
          onClick={handleLocationClick}
        >
          <LocationOnIcon />
        </IconButton>
      )}
      <TextField
        label="Wpisz miasto"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {loadInfo && (
        <div
          id="map"
          style={{ transition: '1s', borderRadius: '25px', overflow: 'hidden', height: '0px', width: '100%' }}
          ref={mapRef}
        ></div>
      )}
    </Box>
  );
};

export default GetLocation;
