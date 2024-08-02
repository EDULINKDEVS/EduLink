import React from 'react';
import { Box, Typography, Paper, Grid, Button, Avatar } from '@mui/material';

interface Job {
  title: string;
  company: string;
  direction: string;
  location: string;
  hardSkills: string[];
  softSkills: string[];
  avatar: string;
  link: string;
}

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <Box sx={{ mt: 5 }}>
      {jobs.map((job, index) => (
        <Paper key={index} elevation={3} sx={{ p: 3, mb: 3, bgcolor: '#f5f5f5', borderRadius: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Avatar src={job.avatar} sx={{ width: 106, height: 106 }} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary' }}>{job.title}</Typography>
              <Typography variant="body1" sx={{ color: '#555555' }}>{job.company}</Typography>
              <Typography variant="body1" sx={{ color: '#555555', fontStyle: 'italic' }}>{job.direction}</Typography>
              <Typography variant="body2" sx={{ color: '#777777', mb: 2 }}>{job.location}</Typography>
              <Typography variant="body2" sx={{ color: '#555555', mb: 1 }}>Umiejętności twarde:</Typography>
              <Typography variant="body2" sx={{ color: '#777777', mb: 2 }}>{job.hardSkills.join(', ')}</Typography>
              <Typography variant="body2" sx={{ color: '#555555', mb: 1 }}>Umiejętności miękkie:</Typography>
              <Typography variant="body2" sx={{ color: '#777777', mb: 2 }}>{job.softSkills.join(', ')}</Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button sx={{
                color: 'secondary',
                backgroundColor: 'primary',
                '&:hover': {
                  backgroundColor: '#9342a0',
                  color: 'secondary'
                }
              }} variant="contained" href={job.link} target="_blank">
                Zobacz więcej
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default JobList;
