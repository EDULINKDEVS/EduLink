import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton
} from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledPaper = styled(Paper)({
  width: '800px',
  backgroundColor: '#fff',
  boxShadow: 'none',
  marginTop: 20,
  padding: 20
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#A758B5',
    },
    '&:hover fieldset': {
      borderColor: '#A758B5',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#A758B5',
    },
  },
  '& .MuiInputBase-input': {
    color: '#A758B5',
  },
  '& .MuiInputLabel-root': {
    color: '#A758B5',
  },
  width: '100%',
});

const StyledButton = styled(Button)({
  backgroundColor: '#A758B5',
  color: '#fff',
  marginTop: 20,
  '&:hover': {
    backgroundColor: '#9342a0',
  },
});

const TraitSelector = ({ setStep }: { setStep: (value: number) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const allTraits = [
    'Inteligentny', 'Kreatywny', 'Pracowity', 'Gracz zespołowy',
    'Zorganizowany', 'Punktualny', 'Elastyczny', 'Niezawodny',
    'Lider', 'Przyjazny', 'Zmotywowany', 'Wydajny',
    'Ambitny', 'Komunikatywny', 'Cierpliwy', 'Dokładny',
    'Odpowiedzialny', 'Uczciwy', 'Innowacyjny', 'Przystosowujący się',
    'Proaktywny', 'Empatyczny', 'Zdeterminowany', 'Samodzielny',
    'Analityczny', 'Sumienny', 'Uważny', 'Inspirujący',
    'Zrównoważony', 'Zorganizowany', 'Spostrzegawczy', 'Entuzjastyczny',
    'Przewidujący', 'Zdolny do negocjacji', 'Opanowany', 'Kulturalny',
    'Techniczny', 'Kreatywny myśliciel', 'Dyplomatyczny', 'Otwartość umysłu',
    'Zorientowany na szczegóły', 'Skrupulatny', 'Lojalny', 'Optymistyczny',
    'Systematyczny', 'Wszechstronny', 'Wspierający', 'Perswazyjny',
    'Rzetelny', 'Zdolny do pracy pod presją', 'Zaradny', 'Zdolności przywódcze',
    'Zorientowany na klienta', 'Zdolny do multitaskingu', 'Przewidywalny', 'Elokwentny',
    'Zdolny do nauki', 'Inicjatywny', 'Oszczędny', 'Skuteczny komunikator',
    'Entuzjasta technologii', 'Zorientowany na cel'
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTraitClick = (trait: string) => {
    setSelectedTraits((prevSelectedTraits) => {
      if (!prevSelectedTraits.includes(trait)) {
        return [...prevSelectedTraits, trait];
      }
      return prevSelectedTraits;
    });
  };

  const handleRemoveTrait = (trait: string) => {
    setSelectedTraits((prevSelectedTraits) =>
      prevSelectedTraits.filter((selectedTrait) => selectedTrait !== trait)
    );
  };

  const filteredTraits = allTraits
    .filter((trait) => trait.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((trait) => !selectedTraits.includes(trait));

  const initialTraits = filteredTraits.slice(0, 12);

  return (
    <Box sx={{ animation: '.7s showAnim forwards' }}>
      <Typography variant="h4" color="#A758B5" align="center" gutterBottom fontWeight={'bold'}>
        Wybierz swoje cechy
      </Typography>
      <StyledPaper>
        <StyledTextField
          label="Wpisz cechę..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Box display="flex" marginTop={4}>
          <Box flex={3} marginRight={2}>
            <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
              {initialTraits.map((trait, index) => (
                <Paper
                  key={index}
                  onClick={() => handleTraitClick(trait)}
                  sx={{
                    padding: 2,
                    textAlign: 'center',
                    fontSize: '.9em',
                    cursor: 'pointer',
                    backgroundColor: selectedTraits.includes(trait) ? '#A758B5' : '#fff',
                    color: selectedTraits.includes(trait) ? '#fff' : '#A758B5',
                    '&:hover': {
                      backgroundColor: selectedTraits.includes(trait) ? '#9342a0' : '#f0e6f6',
                    },
                  }}
                >
                  {trait}
                </Paper>
              ))}
            </Box>
          </Box>
          <Box sx={{
            height: '400px',
            overflow: 'auto'
          }} flex={1} border="1px solid #A758B5" padding={2}>
            <Typography variant="h6" color="#A758B5" gutterBottom>
              Wybrane cechy:
            </Typography>
            <List>
              {selectedTraits.map((trait, index) => (
                <ListItem key={index}>
                  <ListItemText primary={trait} />
                  <IconButton edge="end" onClick={() => handleRemoveTrait(trait)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <StyledButton>
          Zarejestruj
        </StyledButton>
      </StyledPaper>
    </Box>
  );
};

export default TraitSelector;
