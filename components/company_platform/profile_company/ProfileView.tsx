import React from 'react';
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';

interface ProfileProps {
  name: string;
  description: string;
  sectors: string[];
  positions: string[];
  hardSkills: string[];
}

const ProfileView: React.FC<ProfileProps> = ({ name, description, sectors, positions, hardSkills }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 5, borderRadius: 2, bgcolor: '#f5f5f5' }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} src="/profile.jpg" />
        <Typography variant="h4" sx={{ fontWeight: 600, color: '#A758B5' }}>{name}</Typography>
        <Typography variant="body1" sx={{ mt: 2, color: '#555555' }}>{description}</Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ color: '#A758B5', mb: 2, fontWeight:'800' }}>Obsługiwane branże</Typography>
        <Box sx={{ pl: 2 }}>
          {sectors.map((sector, index) => (
            <Typography 
              key={index} 
              variant="body1" 
              sx={{ mb: 1, '&:before': { content: '"•"', display: 'inline-block', width: '1em', mr: 0.5, color: 'black' } }}
            >
              {sector}
            </Typography>
          ))}
        </Box>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Typography variant="h5" sx={{color: '#A758B5', mb: 2, fontWeight:'800'}}>Poszukiwane stanowiska</Typography>
          <Box sx={{ pl: 2 }}>
            {positions.map((position, index) => (
              <Typography 
                key={index} 
                variant="body1" 
                sx={{ mb: 1, '&:before': { content: '"•"', display: 'inline-block', width: '1em', mr: 0.5, color: 'black' } }}
              >
                {position}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{color: '#A758B5', mb: 2, fontWeight:'800'}}>Poszukiwane cechy pracownika</Typography>
          <Box sx={{ pl: 2 }}>
            {hardSkills.map((skill, index) => (
              <Typography 
                key={index} 
                variant="body1" 
                sx={{ mb: 1, '&:before': { content: '"•"', display: 'inline-block', width: '1em', mr: 0.5, color: 'black' } }}
              >
                {skill}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileView;
