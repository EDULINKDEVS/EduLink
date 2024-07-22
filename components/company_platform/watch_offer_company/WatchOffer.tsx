import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper, Grid } from '@mui/material';

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

  if (offers.length === 0) {
    return <Typography variant="h6">Nie masz żadnych zapisanych ofert pracy.</Typography>;
  }

  const currentOffer = offers[currentIndex];

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 5, borderRadius: 2, bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" color="#A758B5" align="center" gutterBottom fontWeight={'bold'}>
        Przeglądaj oferty pracy
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: '#A758B5' }}>{currentOffer.position}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>{currentOffer.location}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>Umiejętności twarde: {currentOffer.hardSkills.join(', ')}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>Umiejętności miękkie: {currentOffer.softSkills.join(', ')}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>Twój zakres obowiązków: {currentOffer.responsibilities.join(', ')}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>Wymagania: {currentOffer.requirements.join(', ')}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>Oferujemy: {currentOffer.offerings.join(', ')}</Typography>
      </Box>
      <Grid container justifyContent="space-between" mt={2}>
        <Button variant="contained" color="primary" onClick={handlePrev}>Poprzednia</Button>
        <Button variant="contained" color="primary" onClick={handleNext}>Następna</Button>
      </Grid>
    </Paper>
  );
};

export default WatchOffer;
