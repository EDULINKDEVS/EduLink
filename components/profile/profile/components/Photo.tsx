import React, { useState, ChangeEvent } from 'react';
import { Box, Slider, Typography, Button } from '@mui/material';

const Photo: React.FC = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [brightness, setBrightness] = useState<number>(100);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBrightnessChange = (event: Event, newValue: number | number[]) => {
    setBrightness(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6">Upload and Adjust Image</Typography>
      <input
        accept="image/*"
        type="file"
        id="file-upload"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <label htmlFor="file-upload">
        <Button variant="contained" component="span">
          Choose Image
        </Button>
      </label>

      {imageUrl && (
        <Box
          mt={2}
          position="relative"
          width="100%"
          maxWidth="600px"
          height="auto"
          display="flex"
          justifyContent="center"
        >
          <img
            src={imageUrl}
            alt="Preview"
            style={{
              maxWidth: '100%',
              height: 'auto',
              filter: `brightness(${brightness}%)`,
              objectFit: 'contain',
            }}
          />
        </Box>
      )}

      <Box mt={2} width="100%" maxWidth="600px">
        <Typography gutterBottom>Adjust Brightness</Typography>
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
    </Box>
  );
};

export default Photo;
