import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Team = () => {
  // Lista członków zespołu
  const teamMembers = [
    {
      name: 'Kamila Janasik-Buko',
      imageSrc: 'https://randomuser.me/api/portraits/women/79.jpg', // Zdjęcie z randomuser.me
      description: 'Kamila to nasza ekspertka ds. sprzedaży. Jej zmysł handlowy i doskonałe umiejętności negocjacyjne przynoszą firmie znakomite wyniki. Jej 10-letnie doświadczenie w branży marketingowej sprawia, że zna się na najlepszych strategiach sprzedażowych.',
    },
      {
      name: 'Łukasz Witt',
      imageSrc: 'https://randomuser.me/api/portraits/men/31.jpg',
      description: 'Łukasz Witt to nasz główny analityk i pomysłodawca wielu projektów. Jego strategiczne myślenie oraz głęboka analiza danych pozwalają nam podejmować właściwe decyzje biznesowe. Jest także odpowiedzialny za rozwój naszych usług.',
    },
    {
      name: 'Łukasz Rutkowski',
      imageSrc: 'https://randomuser.me/api/portraits/men/52.jpg',
      description: 'Łukasz Rutkowski to nie tylko handlowiec, ale także jeden z założycieli naszej firmy. Jego pasja do biznesu i innowacyjne podejście do sprzedaży napędzają nasz zespół do osiągania coraz wyższych celów. Jest prawdziwym liderem z wizją.',
    },
  
    {
      name: 'Kamil Lewiński',
      imageSrc: 'https://randomuser.me/api/portraits/men/83.jpg',
      description: 'Kamil Lewiński jest naszym głównym programistą. Z pasją do technologii tworzy innowacyjne rozwiązania, które napędzają naszą firmę. Jego doświadczenie w programowaniu pozwala nam dostarczać produkty najwyższej jakości.',
    },
  ];

  return (
    <Box sx={{ 
      padding: 4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}>
      <Grid container spacing={7} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 8,
                textAlign: 'left',
                borderRadius: 2,
                backgroundColor: 'theme.palette.primary.light',
                width: "500px",
              }}
            >
              <Box
                component="img"
                src={member.imageSrc}
                alt={member.name}
                sx={{
                  width: 180,
                  height: 180,
                  borderRadius: 3, // Zaokrąglenie rogów prostokąta
                  marginRight: 2,
                  objectFit: 'cover',
                }}
              />
              <Box>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" sx={{ marginTop: 1, color: 'gray' }}>
                  {member.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
