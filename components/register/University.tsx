import {
  Box,
  Typography,
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
import React, { useContext, useEffect, useState } from 'react';
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

const University = ({ name, degree, id }: UniversityType) => {
  const registerContext = useContext(RegisterContext);
  const [currentDegree, setCurrentDegree] = useState<degreeEnum | null>(null);
  const [currentName, setCurrentName] = useState('');
  const [duringStudies, setDuringStudies] = useState(true);
  useEffect(()=>{
    if(name && degree){
      setCurrentName(name);
      setCurrentDegree(degree);
    }
  },[])
  
  const suggestions = [
    'Techniku asdmoipms',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
  ];

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

  const handleInputChange = (event: React.SyntheticEvent, value: string) => {
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      school_name: value,
    });
  };

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
    <div>
      <React.Fragment>
        <Grid container sx={{
          width: 'clamp(200px, 90%, 300px)'
        }}>
        <Grid item xs={10}>
        <StyledFormControl>
          <StyledPaper>
            <Autocomplete
              freeSolo
              options={suggestions}
              inputValue={registerContext?.registerData.school_name}
              onInputChange={handleInputChange}
              renderInput={(params) => (
                <StyledTextField
                {...params}
                label="Szukaj"
                variant="outlined"
                />
              )}
              />
          </StyledPaper>
        </StyledFormControl>

        <StyledFormControl>
          <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>Rodzaj studenta</FormLabel>
          <StyledRadioGroup
            value={'asd'}
            >
            <StyledFormControlLabel value="wTrakcie" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="W trakcie" />
            <StyledFormControlLabel value="absolwent" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Absolwent" />
          </StyledRadioGroup>
        </StyledFormControl>

        <StyledFormControl>
          <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>Rodzaj absolwenta</FormLabel>
          <StyledRadioGroup
            value='asdasd'
            >
            <StyledFormControlLabel value="licencjat" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Licencjat" />
            <StyledFormControlLabel value="magister" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Magister" />
          </StyledRadioGroup>
        </StyledFormControl>
        </Grid>
        <Grid item xs={2}>

        <Box display="flex" sx={{
          width: '100%',
          height: '100%'
        }} justifyContent="center" alignItems="center" marginTop={2}>
          <IconButton
            color="secondary"
            onClick={handleAdd}
            >
            {id ? <DeleteIcon /> : <AddIcon /> }
          </IconButton>
        </Box>
              </Grid>
            </Grid>
      </React.Fragment>
    </div>
  )
}

export default University;
