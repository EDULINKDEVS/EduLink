import React, { useState, ChangeEvent } from 'react';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import ShowAnim from '../helpers_company/ShowAnim';
import Image from 'next/image';

const AddPhotoView = ({setSteps}: {setSteps: (value: number) => void}) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <ShowAnim>

    <Container className='ubuntu-medium' maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" component="h1" gutterBottom color='secondary'>
          Dodaj swoje logo
        </Typography>
        <Typography variant="subtitle1" component="p" gutterBottom color='secondary'>
          Niech inni widzą twoją innowacyjną współpracę!
        </Typography>
        <Box
          mt={4}
          mb={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          {!image ? (
            <>
              <IconButton  aria-label="upload picture" component="label" sx={{
                color:"secondary"
              }}>
                <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
                <PhotoCamera style={{ fontSize: 40 }} />
              </IconButton>
              <Typography variant="body2" color="secondary">
                Kliknij, aby dodać swoje logo
              </Typography>
            </>
          ) : (
            <Box position="relative">
              <Image src={image} alt="Profile" style={{ width: '100%', height: 'auto', maxWidth: 200, borderRadius: '50%' }} />
              <IconButton
                style={{ position: 'absolute', top: -10, right: -10 }}
                aria-label="delete picture"
                onClick={handleRemoveImage}
                
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
        </Box>
        <Button sx={{
          color: 'custom',
          backgroundColor: 'secondary',
          '&:hover' : {
                    backgroundColor: 'primary',
                    color: 'secondary'
                  }
        }} variant="contained"  onClick={()=>{setSteps(1)}}>
          {image ? 'Dodaj zdjęcie' : 'Dalej'}
        </Button>
      </Box>
    </Container>
    </ShowAnim>
  );
};

export default AddPhotoView;
