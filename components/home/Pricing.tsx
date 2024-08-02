import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const tiers = [
  {
    title: 'Pakiet Podstawowy',
    price: '3,99',
    description: [
      'Mapowanie umiejętności',
    ],
  },
  {
    title: 'Premium ',
    price: '4,99',
    description: [
      'Mapowanie umiejętności',
      'Podgląd firm w obszarze do 5 km',
      'Zaczepki limit: 3',
    ],
  },
  {
    title: 'Pakiet Profesionalny',
    subheader: 'Polecane',
    price: '6,99',
    description: [
      'Mapowanie umiejętności',
      'Możliwość kontaktu z potencjalnym pracodawcą',
      'Zaczepki bez limitu',
      'Możliwość dodania portfolio',
      'Podgląd firm w obszarze do 25 km',
      'Dostęp do kalendarza eventów i targów branżowych',
    ],
  },
  {
    title: 'Premium +',
    price: '23,49',
    description: [
      'Mapowanie umiejętności',
      'Podgląd firm w obszarze do 5 km',
      'Zaczepki limit: 3',
    ],
  },
];

export default function Pricing() {
  const [expanded, setExpanded] = useState(Array(tiers.length).fill(false));

  const handleExpandClick = (index: number) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="primary" fontFamily={'playfair-display, sans-serif'} fontWeight={600}>
          ABONAMENT DLA STUDENTÓW
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {/* Quickly build an effective pricing table for your potential customers with
          this layout. <br />
          It&apos;s built with default Material UI components with little
          customization. */}
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier, index) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Premium' ? 12 : 6}
            md={3} // tutaj zmieniam szerokość cenników 3 dla 4 cenników, 4 dla 3 cenników //
          >
            <Card
              sx={{
                height: '200', // Stała wysokość karty
                overflow: 'hidden', // Ukryj nadmiarową treść
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: tier.title === 'Pakiet Profesionalny' ? '2px solid' : '2px solid',
                borderColor: tier.title === 'Pakiet Profesionalny' ? '#3A758B5' : 'undefined',
                background: tier.title === 'Pakiet Profesionalny' ? 'primary' : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: tier.title === 'Pakiet Profesionalny' ? 'grey.100' : '',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'Pakiet Profesionalny' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color: tier.title === 'Pakiet Profesionalny' ? 'grey.50' : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2">
                    {tier.price}
                  </Typography>
                  <Typography component="h4" variant="h6" fontSize={15}>
                    &nbsp; miesięcznie
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'custom',
                  }}
                />
                {tier.description.slice(0, 1).map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color: tier.title === 'Pakiet Profesionalny' ? 'secondary' : 'primary',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color: tier.title === 'Pakiet Profesionalny' ? 'grey.200' : undefined,
                        fontSize: '15px',
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
                <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                  {tier.description.slice(1).map((line) => (
                    <Box
                      key={line}
                      sx={{
                        py: 1,
                        display: 'flex',
                        gap: 1.5,
                        alignItems: 'center',
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          width: 20,
                          color: tier.title === 'Pakiet Profesionalny' ? 'secondary' : 'primary',
                        }}
                      />
                      <Typography
                        component="text"
                        variant="subtitle2"
                        sx={{
                          color: tier.title === 'Pakiet Profesionalny' ? 'grey.200' : undefined,
                          fontSize: '15px',
                        }}
                      >
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </Collapse>
              </CardContent>
              <CardActions
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button className='ubuntu-medium'
                  sx={{
                    textAlign: 'center',
                    color: tier.title === 'Pakiet Profesionalny' ? 'secondary' : 'primary',
                  }}
                  onClick={() => handleExpandClick(index)}
                  endIcon={expanded[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                  {expanded[index] ? 'Pokaż mniej' : 'Pokaż więcej'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
