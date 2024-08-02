import React from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';

interface Job {
  title: string;
  company: string;
  location: string;
  description: string;
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
            <Grid item xs={12} sm={9}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary' }}>{job.title}</Typography>
              <Typography variant="body1" sx={{ color: '#555555' }}>{job.company}</Typography>
              <Typography variant="body2" sx={{ color: '#777777', mb: 2 }}>{job.location}</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>{job.description}</Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button sx={{color:'secondary', backgroundColor:'primary'}} variant="contained" href={job.link} target="_blank">
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
