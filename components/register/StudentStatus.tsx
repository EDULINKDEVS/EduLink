import React, { useContext, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  TextField,
  Autocomplete,
  useTheme
} from '@mui/material';
import { styled } from '@mui/system';
import { RegisterContext } from '@/context/register/RegisterContext';
import StudiesTabCreator from './StudiesTabCreator';
import { School } from '@/context/schoolsData/exampleSchoolsData';
import { useSchoolsData } from '@/context/schoolsData/SchoolsDataProvider';
import { degreeLabelEnum } from '@/context/register/types';



const StudentStatus = ({ setStep }: { setStep: (value: number) => void }) => {
  const theme = useTheme();
  const registerContext = useContext(RegisterContext);
  const dataContext = useSchoolsData();
  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const status = event.currentTarget.value as "school" | "study" | null;
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      status,

    });
  };

  const handleSchoolTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const schoolType = event.currentTarget.value as "vocational" | "technical" | "high_school";
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      school_level: schoolType,
      school_city: '',
      school_name: '',
      school_profile: ''
    });
  };

  const handleSubmit = () => {
    setStep(2);
  };

  const handleInputChangeCity = (event: React.SyntheticEvent, value: string) => {
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      school_city: value,
      school_name: '',
      school_profile: ''
    });
  };
  const handleInputChangeName = (event: React.SyntheticEvent, value: string) => {
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      school_name: value,
      school_profile: ''
    });
  };
  const handleInputChangeProfil = (event: React.SyntheticEvent, value: string) => {
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      school_profile: value,
    });
  };
  const validate = () => {
    if (registerContext?.registerData.status === 'study') {
      if (registerContext.schools.length > 0) {
        return true;
      }
    }
    else if (registerContext?.registerData.status === 'school') {
      if (registerContext.registerData.school_level && registerContext.registerData.school_name && registerContext.registerData.degreeLabel && registerContext.registerData.school_profile) {
        return true;
      }
    }
    return false;

  }
  const [schools, setSchools] = useState<String[]>([]);
  const [profiles, setProfiles] = useState<String[]>([]);
  const StyledPaper = styled(Paper)({
    width: '400px',
    backgroundColor: '#fff',
    boxShadow: 'none',
    marginTop: 20,
  
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
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    '& .MuiTypography-root': {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
  });
  
  const StyledButton = styled(Button)({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    marginTop: 20,
    '&:hover': {
      backgroundColor: '#9342a0',
    },
  });
  
  const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiInputBase-input': {
      color: theme.palette.primary.main,
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.primary.main,
    },
    width: '100%',
  });
  const cities = [
    "Warszawa",
    "Kraków",
    "Łódź",
    "Wrocław",
    "Poznań",
    "Gdańsk",
    "Szczecin",
    "Bydgoszcz",
    "Lublin",
    "Katowice"
  ];
  
  
  const suggestions = [
    'Techniku asdmoipms',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
  ];
  return (
    <Box sx={{ animation: '.7s showAnim forwards', padding: '10px' }}>
      <Typography variant="h4" color="primary" align="center" gutterBottom fontWeight={'bold'}>
        Wybierz swój status
      </Typography>
      <StyledPaper>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Status</FormLabel>
          <StyledRadioGroup value={registerContext?.registerData.status} onChange={handleStatusChange}>
            <StyledFormControlLabel value="school" control={<Radio sx={{ color: theme.palette.primary.main, '&.Mui-checked': { color: theme.palette.primary.main } }} />} label="Uczeń" />
            <StyledFormControlLabel value="study" control={<Radio sx={{ color: theme.palette.primary.main, '&.Mui-checked': { color: theme.palette.primary.main } }} />} label="Student" />
          </StyledRadioGroup>
        </FormControl>

        {registerContext?.registerData.status === 'school' && (
          <>
            <StyledFormControl>
              <FormLabel component="legend" style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Rodzaj szkoły</FormLabel>
              <StyledRadioGroup value={registerContext.registerData.school_level} onChange={handleSchoolTypeChange}>
                <StyledFormControlLabel value="vocational" control={<Radio sx={{ color: theme.palette.primary.main, '&.Mui-checked': { color: theme.palette.primary.main } }} />} label="vocational" />
                <StyledFormControlLabel value="technical" control={<Radio sx={{ color: theme.palette.primary.main, '&.Mui-checked': { color: theme.palette.primary.main } }} />} label="technical" />
                <StyledFormControlLabel value="high_school" control={<Radio sx={{ color: theme.palette.primary.main, '&.Mui-checked': { color: theme.palette.primary.main } }} />} label="high school" />
              </StyledRadioGroup>
            </StyledFormControl>
            {
              registerContext.registerData.school_level !== '' &&
              <>
                <StyledPaper>
                  <Autocomplete
                    freeSolo
                    options={cities}
                    inputValue={registerContext.registerData.school_city}
                    onInputChange={handleInputChangeCity}
                    onBlur={()=>{
                      if(registerContext.registerData.school_level !== ""){
                        setSchools(dataContext.schoolsClass.getSchoolsByDegreeAndCity(registerContext.registerData.school_level, registerContext.registerData.school_city))
                      }
                    }}
                    renderInput={(params) => (
                      <StyledTextField
                        {...params}
                        label="Miasto"
                        variant="outlined"
                      />
                    )}
                  />
                </StyledPaper>
                {
                  registerContext.registerData.school_city.length > 0 &&
                <StyledPaper>
                  <Autocomplete
                    freeSolo
                    options={schools}
                    inputValue={registerContext.registerData.school_name}
                    onInputChange={handleInputChangeName}
                    onBlur={()=>{
                      setProfiles(dataContext.schoolsClass.getProfilesBySchools(registerContext.registerData.school_name))
                    }}
                    renderInput={(params) => (
                      <StyledTextField
                        {...params}
                        label="Nazwa szkoły"
                        variant="outlined"
                      />
                    )}
                  />
                </StyledPaper>
                }
                {
                (registerContext.registerData.school_city.length > 0 && registerContext.registerData.school_name.length > 0)&&

                <StyledPaper>
                  <Autocomplete
                    freeSolo
                    options={profiles}
                    inputValue={registerContext.registerData.school_profile}
                    onInputChange={handleInputChangeProfil}
                    renderInput={(params) => (
                      <StyledTextField
                        {...params}
                        label="Profil"
                        variant="outlined"
                      />
                    )}
                  />
                </StyledPaper>
                }
                    <StyledFormControl>
            <FormLabel component="legend" style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Rodzaj studenta</FormLabel>
            <StyledRadioGroup
              value={registerContext.registerData.degreeLabel === null ? '' : (registerContext.registerData.degreeLabel)}
              onChange={(event) => {
                registerContext?.setRegisterData({
                  ...registerContext.registerData,
                  degreeLabel: event.target.value as degreeLabelEnum,
                });
              }}
              >
              <StyledFormControlLabel value={degreeLabelEnum.DURING} control={<Radio sx={{ color: theme.palette.primary.main, '&.Mui-checked': { color: theme.palette.primary.main } }} />} label="W trakcie" />
              <StyledFormControlLabel value={degreeLabelEnum.GRADUATE} control={<Radio sx={{ color: theme.palette.primary.main, '&.Mui-checked': { color: theme.palette.primary.main } }} />} label="Absolwent" />
            </StyledRadioGroup>
          </StyledFormControl>

              </>
            }
          </>
        )}
        {
          registerContext?.registerData.status === 'study' && <StudiesTabCreator />

        }
        {
          validate() &&
          <StyledButton onClick={handleSubmit}>
            Dalej
          </StyledButton>
        }
      </StyledPaper>
    </Box>
  );
};

export default StudentStatus;
