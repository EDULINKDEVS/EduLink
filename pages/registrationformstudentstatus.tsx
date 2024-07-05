import React, { useState } from 'react';
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
import { styled } from '@mui/system';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { studentSchools, technicalSchools, vocationalSchools, highSchools } from '../components/schoolsData'; // Import list szkół

// Styled Components
const StyledContainer = styled(Box)({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
});

const LeftContainer = styled(Box)({
  flex: 0.5,
  backgroundColor: '#A758B5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const RightContainer = styled(Box)({
  flex: 1.5,
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const StyledPaper = styled(Paper)({
  padding: 20,
  width: '500px',
  backgroundColor: '#fff',
  boxShadow: 'none',
  marginTop: 20,
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

const StyledRadioGroup = styled(RadioGroup)({
  display: 'flex',
  flexDirection: 'row',
});

const StyledFormControl = styled(FormControl)({
  marginTop: 20,
  width: '100%',
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

const StyledDivider = styled(Divider)({
  backgroundColor: '#A758B5',
  margin: '20px 0',
});

// Component
const RegistrationFormStudentStatus: React.FC = () => {
  const [status, setStatus] = useState('');
  const [schoolType, setSchoolType] = useState('');
  const [schools, setSchools] = useState([{ schoolName: '', studentType: '' }]);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus((event.target as HTMLInputElement).value);
    setSchoolType('');
    setSchools([{ schoolName: '', studentType: '' }]);
  };

  const handleSchoolTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchoolType((event.target as HTMLInputElement).value);
    setSchools([{ schoolName: '', studentType: '' }]);
  };

  const handleSchoolNameChange = (index: number, value: string) => {
    const newSchools = [...schools];
    newSchools[index].schoolName = value;
    setSchools(newSchools);
  };

  const handleStudentTypeChange = (index: number, value: string) => {
    const newSchools = [...schools];
    newSchools[index].studentType = value;
    if (value === 'wTrakcie') {
      newSchools.push({ schoolName: '', studentType: '' });
    }
    setSchools(newSchools);
  };

  const getSchoolOptions = () => {
    if (status === 'student') {
      return studentSchools;
    } else if (schoolType === 'technikum') {
      return technicalSchools;
    } else if (schoolType === 'zawodowka') {
      return vocationalSchools;
    } else if (schoolType === 'liceum') {
      return highSchools;
    }
    return [];
  };

  return (
    <StyledContainer>
      {/* Lewa część ekranu */}
      <LeftContainer>
        <HandshakeIcon style={{ fontSize: 100, color: 'white' }} />
      </LeftContainer>

      {/* Prawa część ekranu */}
      <RightContainer>
        <Typography variant="h4" color="#A758B5" align="center" gutterBottom fontWeight={'bold'}>
          Wybierz swój status
        </Typography>
        <StyledPaper>
          <FormControl component="fieldset">
            <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>Status</FormLabel>
            <StyledRadioGroup value={status} onChange={handleStatusChange}>
              <StyledFormControlLabel value="uczen" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Uczeń" />
              <StyledFormControlLabel value="student" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Student" />
            </StyledRadioGroup>
          </FormControl>

          {status === 'uczen' && (
            <StyledFormControl component="fieldset">
              <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>Rodzaj szkoły</FormLabel>
              <StyledRadioGroup value={schoolType} onChange={handleSchoolTypeChange}>
                <StyledFormControlLabel value="zawodowka" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Zawodówka" />
                <StyledFormControlLabel value="technikum" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Technikum" />
                <StyledFormControlLabel value="liceum" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Liceum" />
              </StyledRadioGroup>
            </StyledFormControl>
          )}

          {schools.map((school, index) => (
            <React.Fragment key={index}>
              {(schoolType || status === 'student') && (
                <StyledFormControl>
                  <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>
                    {index === 0 ? 'Wybierz szkołę' : 'Wybierz kolejną szkołę'}
                  </FormLabel>
                  <StyledSelect
                    value={school.schoolName}
                    onChange={(e) => handleSchoolNameChange(index, e.target.value as string)}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Wybierz szkołę
                    </MenuItem>
                    {getSchoolOptions().map((schoolOption) => (
                      <MenuItem key={schoolOption.value} value={schoolOption.value}>
                        {schoolOption.label}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </StyledFormControl>
              )}

              {status === 'student' && (
                <StyledFormControl component="fieldset">
                  <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>Rodzaj studenta</FormLabel>
                  <StyledRadioGroup
                    value={school.studentType}
                    onChange={(e) => handleStudentTypeChange(index, (e.target as HTMLInputElement).value)}
                  >
                    <StyledFormControlLabel value="wTrakcie" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="W trakcie" />
                    <StyledFormControlLabel value="absolwent" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Absolwent" />
                  </StyledRadioGroup>
                </StyledFormControl>
              )}

              {school.studentType === 'absolwent' && (
                <StyledFormControl>
                  <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>Rodzaj absolwenta</FormLabel>
                  <StyledRadioGroup
                    value={school.schoolName}
                    onChange={(e) => handleSchoolNameChange(index, e.target.value as string)}
                  >
                    <StyledFormControlLabel value="licencjat" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Licencjat" />
                    <StyledFormControlLabel value="magister" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Magister" />
                  </StyledRadioGroup>
                </StyledFormControl>
              )}

              {index < schools.length - 1 && <StyledDivider />}
            </React.Fragment>
          ))}

          <StyledButton>
            Dalej
          </StyledButton>
        </StyledPaper>
      </RightContainer>
    </StyledContainer>
  );
};

export default RegistrationFormStudentStatus;
