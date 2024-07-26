import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Grid, Autocomplete, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { traits, hardSkills } from '@/context/schoolsData/exampleSchoolsData';
import CheckIcon from '@mui/icons-material/Check';

const StyledContainer = styled(Box)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledPaper = styled(Paper)({
  padding: 20,
  width: '600px',
  backgroundColor: '#fff',
});

const StyledButton = styled(Button)({
  backgroundColor: '#A758B5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#9342a0'
  }
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
    '& .MuiInputBase-input': {
      color: 'black',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'black',
    '&.Mui-focused': {
      color: '#A758B5',
    },
  },
});

const PlusOfferCompany: React.FC = () => {
  const [formData, setFormData] = useState({
    position: '',
    location: '',
    hardSkills: [] as string[],
    softSkills: [] as string[],
    responsibilities: [] as string[],
    requirements: [] as string[],
    offerings: [] as string[]
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSkillChange = (event: any, value: string[], name: keyof typeof formData) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleListChange = (e: React.KeyboardEvent<HTMLInputElement>, listName: keyof typeof formData) => {
    if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim() !== '') {
      setFormData(prevState => ({
        ...prevState,
        [listName]: [...prevState[listName], (e.target as HTMLInputElement).value.trim()]
      }));
      (e.target as HTMLInputElement).value = '';
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentOffers = JSON.parse(localStorage.getItem('jobOffers') || '[]');
    const updatedOffers = [...currentOffers, formData];
    localStorage.setItem('jobOffers', JSON.stringify(updatedOffers));
    setSuccessMessage('Oferta została pomyślnie zapisana!');
    setFormData({
      position: '',
      location: '',
      hardSkills: [],
      softSkills: [],
      responsibilities: [],
      requirements: [],
      offerings: []
    });
  };

  const renderListItems = (items: string[]) => (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <CheckIcon sx={{ color: '#A758B5', marginRight: 1 }} />
          <ListItemText primary={`${item},`} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" color="#A758B5" align="center" gutterBottom fontWeight={'bold'}>
          Dodaj ofertę pracy
        </Typography>
        {successMessage && (
          <Typography variant="body1" color="green" align="center" gutterBottom>
            {successMessage}
          </Typography>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <StyledTextField
            fullWidth
            margin="normal"
            id="position"
            name="position"
            label="Nazwa stanowiska pracy"
            value={formData.position}
            onChange={handleChange}
            required
          />
          <StyledTextField
            fullWidth
            margin="normal"
            id="location"
            name="location"
            label="Lokalizacja"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <Autocomplete
            multiple
            options={hardSkills.map((option) => option.name)}
            onChange={(event, value) => handleSkillChange(event, value, 'hardSkills')}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                label="Umiejętności twarde, których poszukujesz"
                margin="normal"
                required
              />
            )}
          />
          <Autocomplete
            multiple
            options={traits.map((option) => option.name)}
            onChange={(event, value) => handleSkillChange(event, value, 'softSkills')}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                label="Umiejętności miękkie, których poszukujesz"
                margin="normal"
                required
              />
            )}
          />
          <StyledTextField
            fullWidth
            margin="normal"
            id="responsibilities"
            name="responsibilities"
            label="Twój zakres obowiązków"
            onKeyDown={(e) => handleListChange(e, 'responsibilities')}
          />
          {renderListItems(formData.responsibilities)}
          <StyledTextField
            fullWidth
            margin="normal"
            id="requirements"
            name="requirements"
            label="Wymagania"
            onKeyDown={(e) => handleListChange(e, 'requirements')}
          />
          {renderListItems(formData.requirements)}
          <StyledTextField
            fullWidth
            margin="normal"
            id="offerings"
            name="offerings"
            label="Oferujemy"
            onKeyDown={(e) => handleListChange(e, 'offerings')}
          />
          {renderListItems(formData.offerings)}
          <Grid container justifyContent="center" marginTop={2}>
            <StyledButton type="submit" variant="contained">
              Zapisz
            </StyledButton>
          </Grid>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default PlusOfferCompany;
