import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDrag, useDrop } from 'react-dnd';
import { Box, Button, IconButton, Avatar, Menu, MenuItem, Typography, Fade, Paper, Grid, FormControlLabel, Checkbox, TextField } from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon, DragHandle as DragHandleIcon } from '@mui/icons-material';

interface DraggableImageProps {
  index: number;
  id: number;
  url: string;
  moveImage: (dragIndex: number, hoverIndex: number) => void;
  removeImage: (index: number) => void;
}

const DraggableImage: React.FC<DraggableImageProps> = ({ index, id, url, moveImage, removeImage }) => {
    
  const [, ref] = useDrag({
    type: 'image',
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: 'image',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveImage(item.index, index);
        item.index = index;
      }
    },
  });

  const dropRef = (node: HTMLDivElement | null) => {
    if (node) {
      drop(node);
      ref(node);
    }
  };

  return (
    <Box
      ref={dropRef}
      sx={{ position: 'relative', display: 'inline-block', mx: 1 }}
    >
      <img src={url} alt="Uploaded" style={{ width: 150, height: 100, objectFit: 'cover' }} />
      <IconButton
        sx={{ position: 'absolute', top: 0, right: 0 }}
        onClick={() => removeImage(index)}
      >
        <DeleteIcon />
      </IconButton>
      <DragHandleIcon sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }} />
    </Box>
  );
};

const SliderEditor: React.FC = () => {
    const [options, setOptions] = useState({
        scrolling: false,
        autoScroll: false,
        autoScrollDuration: 0,
        numericNav: false,
        swiper: false
      });
    
  const [images, setImages] = useState<string[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] }, // Use an object for accept
    onDrop: (acceptedFiles: File[]) => {
      const newImages = acceptedFiles.map(file => URL.createObjectURL(file));
      setImages(prevImages => [...prevImages, ...newImages]);
    },
  });

  const removeImage = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const moveImage = (dragIndex: number, hoverIndex: number) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(dragIndex, 1);
    updatedImages.splice(hoverIndex, 0, movedImage);
    setImages(updatedImages);
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptions({
      ...options,
      [event.target.name]: event.target.checked
    });
  };

  const handleAutoScrollDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptions({
      ...options,
      autoScrollDuration: Number(event.target.value)
    });
  };
  return (
    <Box sx={{
        animation:'1s showAnimLev1 forwards'
    }}>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #cccccc',
          borderRadius: '4px',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          marginBottom: '10px',
        }}
      >
        <input {...getInputProps()} />
        <AddIcon fontSize="large" />
        <Typography>Przeciągnij i upuść zdjęcia tutaj lub kliknij, aby dodać</Typography>
      </div>
      <Box sx={{ display: 'flex', overflowX: 'auto', padding: 1 }}>
        {images.map((url, index) => (
          <DraggableImage
            key={index}
            index={index}
            id={index}
            url={url}
            moveImage={moveImage}
            removeImage={removeImage}
          />
        ))}
      </Box>
      <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={3} display={'flex'} justifyContent={'center'}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options.scrolling}
                    onChange={handleCheckboxChange}
                    name="scrolling"
                  />
                }
                label="Możliwość przewijania"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} display={'flex'} justifyContent={'center'}>
              <FormControlLabel
                control={
                  <Box sx={{ display: 'flex', alignItems: 'center', height: '42px' }}>
                    <Checkbox
                      checked={options.autoScroll}
                      onChange={handleCheckboxChange}
                      name="autoScroll"
                    />
                    <Box sx={{ ml: 1 }}>
                      Autoprzewijanie
                    </Box>
                    {options.autoScroll && (
                      <TextField
                        type="number"
                        label="czas(s)"
                        value={options.autoScrollDuration}
                        onChange={handleAutoScrollDurationChange}
                        sx={{ ml: 2, width: '80px' }}
                      />
                    )}
                  </Box>
                }
                label=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} display={'flex'} justifyContent={'center'}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options.numericNav}
                    onChange={handleCheckboxChange}
                    name="numericNav"
                  />
                }
                label="Nawigacja numeryczna"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}  display={'flex'} justifyContent={'center'}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options.swiper}
                    onChange={handleCheckboxChange}
                    name="swiper"
                  />
                }
                label="Swiper"
              />
            </Grid>
          </Grid>
    </Box>
  );
};

export default SliderEditor;
