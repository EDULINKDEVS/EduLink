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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTheme } from '@mui/material';

const tiers = [
  {
    title: 'Podstawowe',
    price: '299,99',
    description: [
    'Limit wystawiania ogłoszeń : 1 (każde kolejne ogłoszenie : 40zł' ,
    'Wybór 3 umiejętności poszukiwanych per ogłoszenie',
    
    ],
    buttonText: 'Wybierz',
    buttonVariant: 'outlined',
  },
  {
    title: 'Profesionalne',
    subheader: 'Polecane',
    price: '499,99',
    description: [
      'Limit wystawiania ogłoszeń : 2 (każde kolejne ogłoszenie : 20zł' ,
      'Wybór 10 umiejętności poszukiwanych per ogłoszenie',
      // 'Brak ograniczeń w wyszukiwaniu'
      
    ],
    buttonText: 'Wybierz',
    buttonVariant: 'contained',
    
  },
  // {
  //   title: 'Premium',
  //   price: '199,99',
  //   description: [
  //     'Limit wystawiania ogłoszeń : 2 (każde kolejne ogłoszenie : 30zł' ,
  //     'Wybór 5 umiejętności poszukiwanych per ogłoszenie',
  //   ],
  //   buttonText: 'Rozpocznij teraz',
  //   buttonVariant: 'outlined',
  // },
];

export default function PricingCom() {
  const theme = useTheme();
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
        <Typography component="h2" variant="h4" color="black" fontFamily={'playfair-display, sans-serif'} fontWeight={600}>
          Oferta dla firm
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Wybierz swój pakiet
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Premium' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Profesionalne' ? '0px solid' : '0px solid',
                borderRadius: 4,
                borderColor:
                  tier.title === 'Profesionalne' ? '3A758B5' : 'undefined',
                background:
                  tier.title === 'Profesionalne'
                    ? theme.palette.primary.light
                    : theme.palette.primary.main,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: tier.title === 'Profesionalne' ? '#A18672' : '#ECE3DC',
                  }}
                >
                  <Typography component="h3" variant="h6" fontWeight={'bold'}>
                    {tier.title}
                  </Typography>
                  {/* {tier.title === 'Profesionalne' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.main',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  )} */}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color: tier.title === 'Profesionalne' ? undefined : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2" >
                    {tier.price} 
                  </Typography>
                  <Typography component="h3" variant="h6">
                    zł &nbsp; /miesięcznie 
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 1,
                    borderColor: theme.palette.primary.dark,
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
                    <CheckCircleOutlineIcon
                      sx={{
                        width: 20,
                        
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === 'Profesionalne' ? undefined : undefined,
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
                  textTransform : 'none', 
                    fontWeight: "bold",
                    borderRadius: 4, 
                    border: tier.title === 'Profesionalne'? '1px solid' : undefined,
                    borderColor: tier.title === 'Profesionalne' ? theme.palette.primary.main : undefined ,
                    backgroundColor:
                    tier.title === 'Profesionalne'
                      ? theme.palette.primary.light
                      : theme.palette.common.white,

                      color:
                      tier.title === 'Profesionalne'
                      ? theme.palette.primary.dark
                      : theme.palette.primary.dark,


                      
                     ' &:hover' : tier.title === 'Profesionalne' ? {
                        backgroundColor: theme.palette.primary.main, color:theme.palette.primary.dark,
                     } : {
                        backgroundColor: theme.palette.primary.light, color:theme.palette.primary.dark,
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