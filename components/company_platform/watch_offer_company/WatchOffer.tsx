import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper, Grid, IconButton, useTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface JobOffer {
  position: string;
  location: string;
  hardSkills: string[];
  softSkills: string[];
  responsibilities: string[];
  requirements: string[];
  offerings: string[];
}

const WatchOffer: React.FC = () => {
  const [offers, setOffers] = useState<JobOffer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const savedOffers = JSON.parse(localStorage.getItem('jobOffers') || '[]');
    setOffers(savedOffers);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : offers.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < offers.length - 1 ? prevIndex + 1 : 0));
  };

  const handleDelete = () => {
    const updatedOffers = offers.filter((_, index) => index !== currentIndex);
    setOffers(updatedOffers);
    localStorage.setItem('jobOffers', JSON.stringify(updatedOffers));
    setCurrentIndex(0);
  };

  if (offers.length === 0) {
    return <Typography variant="h6">Nie masz żadnych zapisanych ofert pracy.</Typography>;
  }

  const currentOffer = offers[currentIndex];

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 5, borderRadius: 2, bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" color="primary" align="center" gutterBottom fontWeight={'bold'}>
        Twoje oferty
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>Stanowisko: {currentOffer.position}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>Lokalizacja: {currentOffer.location}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>Umiejętności twarde: {currentOffer.hardSkills.join(', ')}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>Umiejętności miękkie: {currentOffer.softSkills.join(', ')}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>Zakres obowiązków: {currentOffer.responsibilities.join(', ')}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>Wymagania: {currentOffer.requirements.join(', ')}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>Oferujemy: {currentOffer.offerings.join(', ')}</Typography>
      </Box>
      <Grid container justifyContent="space-between" mt={2}>
        <Button 
          sx={{ 
            backgroundColor: theme.palette.primary.main, 
            color: theme.palette.primary.light, 
            '&:hover': { 
              backgroundColor: theme.palette.primary.main, 
              color: theme.palette.primary.light 
            } 
          }} 
          variant="contained" 
          onClick={handlePrev}
        >
          Poprzednia
        </Button>
        <Button 
          sx={{ 
            backgroundColor: theme.palette.primary.main, 
            color: theme.palette.primary.light, 
            '&:hover': { 
              backgroundColor: theme.palette.primary.main, 
              color: theme.palette.primary.light 
            } 
          }} 
          variant="contained" 
          onClick={handleNext}
        >
          Następna
        </Button>
      </Grid>
      <Grid container justifyContent="center" mt={2}>
        <IconButton onClick={handleDelete}>
          <DeleteIcon sx={{
            fontSize: '40px',
            color: theme.palette.primary.main
          }}/>
        </IconButton>
      </Grid>
    </Paper>
  );
};

export default WatchOffer;
