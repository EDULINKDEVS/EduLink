import React, { useEffect, useRef } from 'react';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };

    const initMap = () => {
      if (mapRef.current && window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 6,
        });
        const infoWindow = new window.google.maps.InfoWindow();

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              infoWindow.setPosition(pos);
              infoWindow.setContent('You are here.');
              infoWindow.open(map);
              map.setCenter(pos);
              map.setZoom(15); // Ustawienie poziomu przybliżenia na 15

              // Dodanie czerwonego markera
              new window.google.maps.Marker({
                position: pos,
                map: map,
                title: 'Your Location',
                icon: {
                  url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                },
              });
            },
            () => {
              handleLocationError(true, infoWindow, map.getCenter() as google.maps.LatLng);
            }
          );
        } else {
          handleLocationError(false, infoWindow, map.getCenter() as google.maps.LatLng);
        }
      }
    };

    const handleLocationError = (browserHasGeolocation: boolean, infoWindow: google.maps.InfoWindow, pos: google.maps.LatLng) => {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? 'Error: The Geolocation service failed.'
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(mapRef.current ? new google.maps.Map(mapRef.current) : undefined);
    };

    loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyDu6wZWXYrGz49gKt628sNbzLbwtN7_jQE`)
      .then(() => {
        initMap();
      })
      .catch((error) => {
        console.error('Error loading Google Maps script:', error);
      });
  }, []);

  return <div id="map" ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default MapComponent;
