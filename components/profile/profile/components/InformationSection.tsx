import { Card, CardContent, Typography, Grid, Divider, Chip } from '@mui/material';
import { FC } from 'react';

const InformationSection: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card sx={{ height:'100%'}}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Jan Kowalski
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Data urodzenia: 15 sierpnia 1990
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Miasto zamieszkania: Warszawa
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2">
              Krótki opis: Jestem pasjonatem technologii z ponad 10-letnim doświadczeniem w branży IT. Specjalizuję się w tworzeniu aplikacji webowych i mobilnych oraz w zarządzaniu projektami technologicznymi.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card sx={{ height:'100%'}}>
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom>
              Ukończone szkoły
            </Typography>
            <Typography variant="body1">
              <strong>Uniwersytet Warszawski</strong> - Informatyka, 2012
            </Typography>
            <Typography variant="body1">
              <strong>Politechnika Wrocławska</strong> - Zarządzanie Projektami, 2015
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Umiejętności
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              Twarde:
            </Typography>
            <Chip label="JavaScript" sx={{ margin: '4px' }} />
            <Chip label="React" sx={{ margin: '4px' }} />
            <Chip label="TypeScript" sx={{ margin: '4px' }} />
            <Chip label="Node.js" sx={{ margin: '4px' }} />
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" fontWeight="bold">
              Miękkie:
            </Typography>
            <Chip label="Zarządzanie projektami" sx={{ margin: '4px' }} />
            <Chip label="Komunikacja" sx={{ margin: '4px' }} />
            <Chip label="Rozwiązywanie problemów" sx={{ margin: '4px' }} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InformationSection;
