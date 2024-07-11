import {
  Box,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Autocomplete,
  TextField,
  IconButton,
  Grid
} from '@mui/material';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import { degreeEnum } from '@/context/register/types';
import { RegisterContext } from '@/context/register/RegisterContext';
import DeleteIcon from '@mui/icons-material/Delete';

export type UniversityType = {
  name?: string;
  degree?: degreeEnum;
  id?: string;
}

const StyledFormControl = styled(FormControl)({
  width: '100%',
});

const StyledPaper = styled(Paper)({
  marginTop: '20px',
  width: '100%',
  boxShadow: 'none',
});

const StyledRadioGroup = styled(RadioGroup)({
  display: 'flex',
  flexDirection: 'row',
});

const StyledFormControlLabel = styled(FormControlLabel)({
  color: '#A758B5',
  fontWeight: 'bold',
  '& .MuiTypography-root': {
    color: '#A758B5',
    fontWeight: 'bold',
  },
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
  const handleDataChanged = ()=>{
    const value = registerContext?.schools.find(school => school.id === id);
    if(value?.degree !== de)
  }
  const handleAdd = () => {

  };
  const handleDelete = ()=>{

  }
  return (
      <React.Fragment>
        

        <Grid container>
          <Grid item xs={10} width={'100%'}>
            <StyledFormControl>
              <StyledPaper>
                <Autocomplete
                  freeSolo
                  options={suggestions}
                  inputValue={currentName}
                  onInputChange={handleInputChange}
                  renderInput={(params) => (
                    <StyledTextField
                    {...params}
                    label="Nazwa szkoły"
                    variant="outlined"
                    />
                  )}
                  />
              </StyledPaper>
            </StyledFormControl>

            <StyledFormControl>
              <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>Rodzaj studenta</FormLabel>
              <StyledRadioGroup
                value={duringStudies === null ? '' : (duringStudies ? 'during' : 'absolwent')}
                onChange={(event) => {
                  setDuringStudies(event.target.value === 'during');
                }}
                >
                <StyledFormControlLabel value="during" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="W trakcie" />
                <StyledFormControlLabel value="absolwent" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Absolwent" />
              </StyledRadioGroup>
            </StyledFormControl>
            {
              (!duringStudies && duringStudies !== null) &&
              <StyledFormControl>
                <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>Rodzaj absolwenta</FormLabel>
                <StyledRadioGroup
                  value={currentDegree || ''}
                  onChange={(event) => {
                    setCurrentDegree(event.target.value as degreeEnum);
                  }}
                >
                  <StyledFormControlLabel value="bachrlor" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Licencjat" />
                  <StyledFormControlLabel value="engineer" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Inżynier" />
                  <StyledFormControlLabel value="magister" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Magister" />
                  <StyledFormControlLabel value="doctor" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Doktor" />

                </StyledRadioGroup>
              </StyledFormControl>
            }
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" sx={{ width: '100%', height: '100%' }} justifyContent="center" alignItems="center" marginTop={2}>
              {id ? (
                (edit && addable) ? 
                <IconButton color="secondary" onClick={handleAdd}>
                    <AddIcon /> 
                  </IconButton>
                : 
                <IconButton color="secondary" onClick={handleDelete}>
                    <DeleteIcon />
                  </IconButton>
              ) : (
                addable && <IconButton color="secondary" onClick={handleAdd}>
                  <AddIcon />
                </IconButton>
              )}
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
  );
};

export default University;
