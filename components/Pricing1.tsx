import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Background from './Background';

const tiers = [
  {
    title: 'Pakiet Podstawowy',
    price: '3,99',
    description: [
      'Mapowanie umiejętności',
      // '2 GB of storage',
      // 'Help center access',
      // 'Email support',
    ],
    buttonText: 'Rozpocznij teraz',
    buttonVariant: 'outlined',
  },
  
  {
    title: 'Premium ',
    price: '4,99',
    description: [
      'Mapowanie umiejętności',
      'Podgląd firm w obszarze do 5 km',
      'Zaczepki limit: 3',
    ],
    buttonText: 'Rozpocznij teraz',
    buttonVariant: 'outlined',
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
    buttonText: 'Rozpocznij teraz',
    buttonVariant: 'contained',
    
  },

    
  {
    title: 'Premium +',
    price: '23,49',
    description: [
      'Mapowanie umiejętności',
      'Podgląd firm w obszarze do 5 km',
      'Zaczepki limit: 3',
    ],
    buttonText: 'Rozpocznij teraz',
    buttonVariant: 'outlined',
  },


];

export default function Pricing1() {
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
        <Typography component="h2" variant="h4" color="#A758B5" fontFamily={'playfair-display, sans-serif'} fontWeight={600}>
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
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Premium' ? 12 : 6}
            md={3}   //tutaj zmieniam szerokość cenników 3 dla 4 cenników , 4 dla 3 cenników//
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Pakiet Profesionalny' ? '2px solid' : '2px solid',
                borderColor:
                  tier.title === 'Pakiet Profesionalny' ? '3A758B5' : 'undefined',
                background:
                  tier.title === 'Pakiet Profesionalny'
                    ? '#A758B5'
                    : undefined,
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
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
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
                    borderColor: 'black',
                  }}
                />
                {tier.description.map((line) => (
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
                        color:
                          tier.title === 'Pakiet Profesionalny'
                            ? 'white'
                            : '#A758B5',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === 'Pakiet Profesionalny' ? 'grey.200' : undefined,
                          fontSize: "15px"
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button sx={{
                    backgroundColor:
                    tier.title === 'Pakiet Profesionalny'
                      ? 'white'
                      : '#A758B5',

                      color:
                      tier.title === 'Pakiet Profesionalny'
                      ? 'black'
                      : 'white',


                      
                     ' &:hover' : tier.title === 'Pakiet Profesionalny' ? {
                        backgroundColor: '#A758B5', color:'white',
                     } : {
                        backgroundColor: "white", color: 'black'
                     }
                      
                      
                }}
                  fullWidth
                  variant={tier.buttonVariant as 'outlined' | 'contained'}
                  component="a"
                  href="/material-ui/getting-started/templates/checkout/"
                  target="_blank"
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}