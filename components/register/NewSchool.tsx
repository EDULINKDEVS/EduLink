import {
    Box,
    Typography,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    MenuItem,
    Select,
    Button,
    Divider
  } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { studentSchools, technicalSchools, vocationalSchools, highSchools} from '../schoolsData';

const NewSchool = () => {

    const StyledFormControl = styled(FormControl)({
        marginTop: 20,
        width: '100%',
      });
      
    const StyledDivider = styled(Divider)({
        backgroundColor: '#A758B5',
        margin: '20px 0',
      });
      const StyledSelect = styled(Select)({
        width: '100%',
        marginTop: 20,
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
      });
      const StyledPaper = styled(Paper)({
        padding: 20,
        width: 'clamp(200px,70%,500px)',
        backgroundColor: '#fff',
        boxShadow: 'none',
        marginTop: 20,
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
      
      const StyledButton = styled(Button)({
        backgroundColor: '#A758B5',
        color: '#fff',
        marginTop: 20,
        '&:hover': {
          backgroundColor: '#9342a0',
        },
      });
      
  return (
    <div>
              <React.Fragment>
                  <StyledFormControl>
                    <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>
                    </FormLabel>
                    <StyledSelect
                      value={'asdasd'}
                      displayEmpty
                    >
                      <MenuItem value="" disabled>
                        Wybierz szkołę
                      </MenuItem>

                    </StyledSelect>
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
  
              </React.Fragment>
    </div>
  )
}

export default NewSchool