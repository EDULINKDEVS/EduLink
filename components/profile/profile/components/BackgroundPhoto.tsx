import { Box, IconButton } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BackgroundPhoto: React.FC = () => {
  const defaultCover = 'https://via.placeholder.com/600x200';
  const [coverPicture, setCoverPicture] = useState<string>(defaultCover);

  const handleCoverPictureChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setCoverPicture(e.target.result as string);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleRemoveCoverPicture = () => {
    setCoverPicture(defaultCover);
  };

  return (
    <Box
      sx={{
        height: 200,
        backgroundImage: `url(${coverPicture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="cover-picture-input"
        type="file"
        onChange={handleCoverPictureChange}
      />
      <label htmlFor="cover-picture-input">
        <IconButton
          sx={{
            position: 'absolute',
            top: 10,
            right: 50,
            color: 'white'
          }}
          component="span"
        >
          <EditIcon />
        </IconButton>
      </label>
      <IconButton
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          color: 'white'
        }}
        onClick={handleRemoveCoverPicture}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default BackgroundPhoto;
