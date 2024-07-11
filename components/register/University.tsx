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

const University = ({ name, degree, id }: UniversityType) => {
  const registerContext = useContext(RegisterContext);
  const [currentDegree, setCurrentDegree] = useState<degreeEnum | null>(null);
  const [currentName, setCurrentName] = useState('');
  const [duringStudies, setDuringStudies] = useState<boolean| null>(null);
  const [edit, setEdit] = useState(false);
  const [addable, setAddable] = useState(false);

  useEffect(() => {
    if (name && degree) {
      setCurrentName(name);
      setCurrentDegree(degree);
      setDuringStudies(degree === degreeEnum.DURING);
    }
  }, [name, degree]);

  useEffect(()=>{
    if(validate()){
      setAddable(true);
    }else{
      setAddable(false);
    }
  }, [currentDegree, currentName, duringStudies]);

  useEffect(() => {
    const handleDataChanged = () => {
      if (id) {
        if (name !== currentName || degree !== currentDegree || (degree !== degreeEnum.DURING && duringStudies)) {
          setEdit(true);
        } else {
          setEdit(false);
        }
      }
    };

    handleDataChanged();
  }, [currentName, currentDegree, duringStudies, id, name, degree]);

  const suggestions = [
    'Techniku asdmoipms',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
  ];

  const handleInputChange = useCallback((event: React.SyntheticEvent, value: string) => {
    setCurrentName(value);
  }, []);

  const handleAdd = useCallback(() => {
    if (id) {
      if(duringStudies){
        setCurrentDegree(degreeEnum.DURING);
        currentDegree &&
        registerContext?.handleEditSchool(currentName, currentDegree, id);
      }else{
        currentDegree &&
        registerContext?.handleEditSchool(currentName, currentDegree, id);
      }
    } else {
      if(duringStudies){
        registerContext?.handleAddSchool(currentName, degreeEnum.DURING);
      }
      else{
        currentDegree &&
        registerContext?.handleAddSchool(currentName, currentDegree);
      }
      setCurrentDegree(null);
      setCurrentName('');
      setDuringStudies(null);
    }
    setEdit(false);
  }, [currentName, currentDegree, id, duringStudies, registerContext]);

  const handleDelete = useCallback(() => {
    if (id) {
      registerContext?.handleRemoveSchool(id);
    }
  }, [id, registerContext]);

  const validate = () => {
    if(duringStudies){
      return currentName.length > 0;
    }
    return currentName.length > 0 && currentDegree;
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
