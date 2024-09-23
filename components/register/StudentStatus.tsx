import React, { useContext, useEffect, useState } from 'react';
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
  useTheme,
} from '@mui/material';
import { styled, Theme } from '@mui/system';
import { RegisterContext } from '@/context/register/RegisterContext';
import StudiesTabCreator from './StudiesTabCreator';
import { degreeLabelEnum } from '@/context/register/types';

interface ThemedProps {
  theme: Theme;
}



const StyledPaper = styled(Paper)<ThemedProps>(({ theme }) => ({
  width: '400px',
  backgroundColor: 'yellow',
  boxShadow: 'none',
  marginTop: 20,
}));

const StyledRadioGroup = styled(RadioGroup)({
  display: 'flex',
  flexDirection: 'row',

});

const StyledFormControl = styled(FormControl)({
  marginTop: 20,
  width: '100%',
});

const StyledFormControlLabel = styled(FormControlLabel)<ThemedProps>(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: 'bold',
  '& .MuiTypography-root': {
    color: theme.palette.common.black,
    fontWeight: 'bold',
  },
}));

const StyledButton = styled(Button)<ThemedProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  marginTop: 20,
  '&:hover': {
    backgroundColor: '#9342a0',
  },
}));

const StyledTextField = styled(TextField)<ThemedProps>(({ theme }) => ({
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
}));

interface StudentStatusProps {
  setStep: (value: number) => void;
}

const StudentStatus: React.FC<StudentStatusProps> = ({ setStep }) => {
  const theme = useTheme();
  const registerContext = useContext(RegisterContext);
  const [schools, setSchools] = useState<string[]>([]);
  const [profiles, setProfiles] = useState<string[]>([]);
  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const status = event.currentTarget.value as 'school' | 'study';
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      status,
    });
  };

  const statusSchool = (value: string) => {
    switch(value){
      case 'vocational':
        return 'voc';
      case 'technical':
        return 'tech';
      case 'high_school':
        return 'high';
      default:
        return 'error';
    }
  }

  const handleSchoolTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const schoolType = event.currentTarget.value as 'vocational' | 'technical' | 'high_school';
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      school_level: schoolType,
      school_city: '',
      school_name: '',
      school_profile: '',
    });
  };

  const handleSubmit = () => {
    setStep(2);
  };

  const handleInputChangeCity = (_event: React.SyntheticEvent, value: string) => {
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      school_city: value,
      school_name: '',
      school_profile: '',
    });
  };

  const handleInputChangeName = (_event: React.SyntheticEvent, value: string) => {
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      school_name: value,
      school_profile: '',
    });
  };

  const handleInputChangeProfile = (_event: React.SyntheticEvent, value: string) => {
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      school_profile: value,
    });
  };

  const validate = () => {
    if (registerContext?.registerData.status === 'study') {
      return registerContext.schools.length > 0;
    }
    if (registerContext?.registerData.status === 'school') {
      return (
        registerContext.registerData.school_level &&
        registerContext.registerData.school_name &&
        registerContext.registerData.degreeLabel &&
        registerContext.registerData.school_profile
      );
    }
    return false;
  };
  useEffect(() => {
    registerContext?.getCitiesDB();

  }, [])

  useEffect(()=>{
    if(registerContext?.schoolsDB){
      
      setSchools(registerContext?.schoolsDB.map(el => el.name));
    }
  }, [registerContext?.schoolsDB]);

  useEffect(()=>{
    if(registerContext?.profilesDB){
      
      setProfiles(registerContext?.profilesDB.map(el => el.name));
    }
  }, [registerContext?.profilesDB]);
  return (
    <Box sx={{ animation: '.7s showAnim forwards', padding: '10px' }}>
      <Typography variant="h4" color='theme.palette.common.black' align="center" gutterBottom fontWeight="bold">
        Wybierz swój status
      </Typography>
      <StyledPaper theme={theme}>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ color: theme.palette.common.black, fontWeight: 'bold' }}>
            Status
          </FormLabel>
          <StyledRadioGroup value={registerContext?.registerData.status} onChange={handleStatusChange}>
            <StyledFormControlLabel value="school" control={<Radio />} label="Uczeń" theme={theme} />
            <StyledFormControlLabel value="study" control={<Radio />} label="Student" theme={theme} />
          </StyledRadioGroup>
        </FormControl>

        {registerContext?.registerData.status === 'school' && (
          <>
            <StyledFormControl>
              <FormLabel component="legend" style={{ color: theme.palette.common.black, fontWeight: 'bold' }}>
                Rodzaj szkoły
              </FormLabel>
              <StyledRadioGroup value={registerContext.registerData.school_level} onChange={handleSchoolTypeChange}>
                <StyledFormControlLabel
                  value="vocational"
                  control={<Radio />}
                  label="vocational"
                  theme={theme}
                />
                <StyledFormControlLabel
                  value="technical"
                  control={<Radio />}
                  label="technical"
                  theme={theme}
                />
                <StyledFormControlLabel
                  value="high_school"
                  control={<Radio />}
                  label="high school"
                  theme={theme}
                />
              </StyledRadioGroup> 
            </StyledFormControl>
            {registerContext.registerData.school_level !== '' && (
              <>
                <StyledPaper theme={theme}>
                  <Autocomplete
                    freeSolo
                    options={registerContext.citiesDB.map(element => element)}
                    getOptionLabel={(option) => option.name}
                    inputValue={registerContext.registerData.school_city}
                    onInputChange={handleInputChangeCity}
                    onBlur={async () => {
                      await setSchools([])
                      await registerContext.setSchoolsDB([]);
                      if (registerContext?.registerData.school_city) {
                        registerContext?.getSchoolsDB(registerContext.registerData.school_city, statusSchool(registerContext.registerData.school_level));
                    
                       
                      }
                    }}
                    renderOption={(props, option) => (
                      <li {...props} key={option.id}>
                        {option.name}
                      </li>
                    )}
                    renderInput={(params) => <StyledTextField {...params} label="Miasto" variant="outlined" theme={theme} />}
                  />
                </StyledPaper>
                {registerContext.registerData.school_city.length > 0 && (
                  <StyledPaper theme={theme}>
                    <Autocomplete
                      freeSolo
                      options={schools}
                      inputValue={registerContext.registerData.school_name}
                      onInputChange={handleInputChangeName}
                      onBlur={
                        async () => {
                        setProfiles([])
                        registerContext.setProfilesDB([])
                        if (registerContext?.registerData.school_name) {
                          await registerContext?.getProfilesDB(registerContext.registerData.school_name);
                         
                         
                        }
                      }}
                        
                                     
                      renderInput={(params) => <StyledTextField {...params} label="Nazwa szkoły" variant="outlined" theme={theme} />}
                    />
                  </StyledPaper>
                )}
                {registerContext.registerData.school_city.length > 0 &&
                  registerContext.registerData.school_name.length > 0 && (
                    <StyledPaper theme={theme}>
                      <Autocomplete
                        freeSolo
                        options={profiles}
                        inputValue={registerContext.registerData.school_profile}
                        onInputChange={handleInputChangeProfile}
                        renderInput={(params) => <StyledTextField {...params} label="Profil" variant="outlined" theme={theme} />}
                      />
                    </StyledPaper>
                  )}
                <StyledFormControl>
                  <FormLabel component="legend" style={{ color: theme.palette.common.black, fontWeight: 'bold' }}>
                    Rodzaj studenta
                  </FormLabel>
                  <StyledRadioGroup
                    value={registerContext.registerData.degreeLabel || ''}
                    onChange={(event) => {
                      registerContext?.setRegisterData({
                        ...registerContext.registerData,
                        degreeLabel: event.target.value as degreeLabelEnum,
                      });
                    }}
                  >
                    <StyledFormControlLabel
                      value={degreeLabelEnum.DURING}
                      control={<Radio />}
                      label="W trakcie"
                      theme={theme}
                    />
                    <StyledFormControlLabel
                      value={degreeLabelEnum.GRADUATE}
                      control={<Radio />}
                      label="Absolwent"
                      theme={theme}
                    />
                  </StyledRadioGroup>
                </StyledFormControl>
              </>
            )}
          </>
        )}
        {registerContext?.registerData.status === 'study' && <StudiesTabCreator />}
        {validate() && (
          <StyledButton onClick={handleSubmit} theme={theme}>
            Dalej
          </StyledButton>
        )}
      </StyledPaper>
    </Box>
  );
};

export default StudentStatus;
