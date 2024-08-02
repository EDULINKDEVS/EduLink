import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import React, { useState } from 'react';
import JobList from './JobList';
import { jobs } from './example';

const ITEMS_PER_PAGE = 3;

const Search: React.FC = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);

  const handleNext = () => {
    if ((page + 1) * ITEMS_PER_PAGE < jobs.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const paginatedJobs = jobs.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <Container sx={{animation: '1s showAnimLev1 forwards', opacity: 0}}>
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 700, color: theme.palette.primary.light }}>
          Oferty wybrane dla Ciebie
        </Typography>
      </Box>
      <JobList jobs={paginatedJobs} />
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        <Grid item>
          <Button sx={{backgroundColor:theme.palette.primary.light , color: theme.palette.primary.main, fontWeight:"600"}} variant="contained" onClick={handlePrev} disabled={page === 0}>
            Wróć
          </Button>
        </Grid>
        <Grid item>
          <Button sx={{backgroundColor:theme.palette.primary.light , color: theme.palette.primary.main, fontWeight:"600"}} variant="contained"  onClick={handleNext} disabled={(page + 1) * ITEMS_PER_PAGE >= jobs.length}>
            Dalej
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;
