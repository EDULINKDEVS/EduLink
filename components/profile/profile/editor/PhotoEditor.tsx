import React, { useState, ChangeEvent, DragEvent } from 'react';
import { Box, Slider, Typography, Button } from '@mui/material';

const PhotoEditor = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [brightness, setBrightness] = useState<number>(100);
  const [width, setWidth] = useState<number>(100); // Width state
  const [borderRadius, setBorderRadius] = useState<number>(0); // New state for border radius

  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleBrightnessChange = (event: Event, newValue: number | number[]) => {
    setBrightness(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  const handleWidthChange = (event: Event, newValue: number | number[]) => {
    setWidth(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  const handleBorderRadiusChange = (event: Event, newValue: number | number[]) => {
    setBorderRadius(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6">Załaduj i dostosuj zdjęcie</Typography>
      <input
        accept="image/*"
        type="file"
        id="file-upload"
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
      <label htmlFor="file-upload">
        <Button variant="contained" component="span">
          Wybierz zdjęcie
        </Button>
      </label>

      <Box
        mt={2}
        position="relative"
        width="100%"
        height="auto"
        display="flex"
        justifyContent="center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        sx={{ border: '2px dashed grey', borderRadius: '4px', padding: '16px', textAlign: 'center' }}
      >
        {image ? (
          <img
            src={image as string}
            alt="Preview"
            style={{
              maxWidth: `${width}%`,
              height: 'auto',
              filter: `brightness(${brightness}%)`,
              objectFit: 'contain',
              borderRadius: `${borderRadius}px`,
            }}
          />
        ) : (
          <Typography variant="body1" color="textSecondary">Przeciągnij zdjęcie tutaj</Typography>
        )}
      </Box>

      <Box mt={2} width="100%" maxWidth="600px">
        <Typography gutterBottom>Jasność</Typography>
        <Slider
          value={brightness}
          onChange={handleBrightnessChange}
          aria-labelledby="brightness-slider"
          min={0}
          max={200}
          step={1}
          valueLabelDisplay="auto"
        />
      </Box>

      <Box mt={2} width="100%" maxWidth="600px">
        <Typography gutterBottom>Szerokość</Typography>
        <Slider
          value={width}
          onChange={handleWidthChange}
          aria-labelledby="width-slider"
          min={50}
          max={100}
          step={1}
          valueLabelDisplay="auto"
        />
      </Box>

      <Box mt={2} width="100%" maxWidth="600px">
        <Typography gutterBottom>Zaokrąglenie rogów</Typography>
        <Slider
          value={borderRadius}
          onChange={handleBorderRadiusChange}
          aria-labelledby="border-radius-slider"
          min={0}
          max={50}
          step={1}
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  );
};

export default PhotoEditor;
