import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemText,
  Button
} from '@mui/material';
import { styled } from '@mui/system';

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
    'Intelligent', 'Creative', 'Hardworking', 'Team Player',
    'Organized', 'Punctual', 'Adaptable', 'Reliable',
    'Leader', 'Friendly', 'Motivated', 'Efficient',
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

  const filteredTraits = allTraits.filter((trait) =>
    trait.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ animation: '.7s showAnim forwards' }}>
      <Typography variant="h4" color="#A758B5" align="center" gutterBottom fontWeight={'bold'}>
        Wybierz swoje cechy
      </Typography>
      <StyledPaper>
        <StyledTextField
          label="Szukaj cech"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Box display="flex" marginTop={4}>
          <Box flex={3} marginRight={2}>
            <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
              {filteredTraits.map((trait, index) => (
                <Paper
                  key={index}
                  onClick={() => handleTraitClick(trait)}
                  sx={{
                    padding: 2,
                    textAlign: 'center',
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
          <Box flex={1} border="1px solid #A758B5" padding={2}>
            <Typography variant="h6" color="#A758B5" gutterBottom>
              Wybrane cechy:
            </Typography>
            <List>
              {selectedTraits.map((trait, index) => (
                <ListItem key={index}>
                  <ListItemText primary={trait} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <StyledButton onClick={()=>{setStep(1)}}>
          Wróć
        </StyledButton>

        <StyledButton>
          Zatwierdź
        </StyledButton>
      </StyledPaper>
    </Box>
  );
};

export default TraitSelector;
