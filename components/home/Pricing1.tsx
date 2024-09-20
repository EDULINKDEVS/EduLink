import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
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
    title: 'Pakiet Podstawowy',
    price: '0,00',
    description: [
      'Zdjęcie profilowe',
      'Limit umiejętności do przypisania : 5',
      'Podstawowy widok profilu',
      'Limit wiadomości do firm : 1 ',
      'Dostęp do podstawowych informacji na temat przedsiębiorstwa',
      'Limit branż do wyszukiwania : 1',
      'Limit wyboru lokalizacji: 1 '
    ],
    buttonText: 'Rozpocznij teraz',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pakiet Profesionalny',
    subheader: 'REKOMENDOWANE',
    price: '9,99',
    description: [
      'Zdjęcie profilowe',
      'Limit umiejętności do przypisania : 20',
      '"PRO" widok profilu',
      'Limit wiadomości do firm : 10 ',
      'Rozszerzeony dostęp do informacji na temat przedsiębiorstwa',
      'Limit branż do wyszukiwania : 6',
      'Limit wyboru lokalizacji: 2 ',
      'Limit funkcji "zaczepki": 5',
      'Rozbudowana funkcja wyszukiwania',
      'Możliwość dodania portfolio',
      'Promowanie profilu',
      'Dostęp do kalendarza eventów, targów i spotkań branżowych'
    ],
    buttonText: 'Rozpocznij teraz',
    buttonVariant: 'contained',
  },
  // Dodaj więcej cenników w tej strukturze
];

export default function Pricing1() {
  const theme = useTheme();
  
  // Stan do śledzenia, który cennik jest rozsunięty
  const [expanded, setExpanded] = React.useState(Array(tiers.length).fill(false));

  // Funkcja do obsługi kliknięcia przycisku "Pokaż więcej"
  const handleExpandClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];  // Tylko jeden element się zmienia
    setExpanded(newExpanded);
  };

  return (
    <Container
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
          Abonament dla studentów
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Wybierz swój pakiet
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier, index) => (
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
                background:
                  tier.title === 'Pakiet Profesionalny'
                    ? theme.palette.primary.main
                    : undefined,
                borderRadius: 4,
                position: 'relative',
                overflow: 'visible',
                
              }}
            >
               {tier.title === 'Pakiet Profesionalny' && (
                    <Chip
                      // icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="medium"
                      sx={{
                        position: 'absolute',
                        backgroundColor: "white",
                        color: "black",
                        top: "-15px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontWeight: 'bold',
                        padding: '0 20px',

                      }}
                    />
                  )}
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: tier.title === 'Pakiet Profesionalny' ? theme.palette.primary.light : theme.palette.primary.main,
                  
                  }}
                >
                  <Typography component="h3" variant="h6" fontWeight={'bold'}>
                    {tier.title}
                  </Typography>
                 
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                  }}
                >
                  <Typography component="h3" variant="h2">
                    {tier.price}
                  </Typography>
                  <Typography component="h4" variant="h6" fontSize={20}>
                    &nbsp; /miesięcznie
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 1,
                    opacity: 1,
                    borderColor: theme.palette.primary.dark,
                  }}
                />
                {/* Pokaż pierwsze 4 linie lub wszystkie, jeśli rozsunięte */}
                {tier.description.slice(0, expanded[index] ? tier.description.length : 4).map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ 
                      width: 20,
                  
                      }} 
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: tier.title === 'Pakiet Profesionalny' ? undefined : undefined,
                        fontSize: "15px",
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              {/* Przycisk Pokaż więcej */}
              <Button sx={{
                color: "black",
                border: tier.title === 'Pakiet Profesionalny' ? undefined :"2px solid",
                borderColor: tier.title === 'Pakiet Profesionalny' ? undefined : theme.palette.primary.light,
                borderRadius: 4,
                backgroundColor: "white",
                ' &:hover' : tier.title === 'Pakiet Profesionalny' ? {
                        backgroundColor: theme.palette.primary.light, color:theme.palette.primary.dark,
                     } : {
                        backgroundColor: theme.palette.primary.main, color:theme.palette.primary.dark,
                     },
              }} onClick={() => handleExpandClick(index)}>
                {expanded[index] ? 'Pokaż mniej' : 'Pokaż więcej'}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
