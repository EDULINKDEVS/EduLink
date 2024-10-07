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
  Select,
  MenuItem,
  useTheme,
} from '@mui/material';
import { styled, Theme } from '@mui/system';
import { RegisterContext } from '@/context/register/RegisterContext';
import StudiesTabCreator from './StudiesTabCreator';
import { degreeLabelEnum } from '@/context/register/types';

interface ThemedProps {
  theme: Theme;
}

const RootBox = styled(Box)({
  minHeight: '100vh',
  width: '50vw',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'flex-start', // Ustawione na 'flex-start', aby całość była bliżej górnej części strony
  justifyContent: 'center',
  paddingTop: '50px', // Zmniejszenie odstępu od góry dla lepszej pozycji
});

const StyledPaper = styled(Paper)<ThemedProps>(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: 'white',
  boxShadow: 'none',
  padding: 20,
}));

const StyledRadioGroup = styled(RadioGroup)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center', // Wypośrodkowanie przycisków poziomo
  gap: '100px',
  width: '100%',
});

const StyledFormControl = styled(FormControl)({
  marginTop: 20,
  width: '100%',
});

const InvisibleRadio = styled(Radio)({
  visibility: 'hidden',
  width: 0,
  height: 0,
  padding: 0,
  margin: 0,
});

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  '& .MuiFormControlLabel-label': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    height: '50px',
    backgroundColor: theme.palette.common.white,
    padding: '20px',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  '& .Mui-checked + .MuiFormControlLabel-label': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.black,
    borderColor: theme.palette.primary.main,
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
    const status = event.target.value as 'school' | 'study';
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      status,
    });
  };

  const handleDegreeLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const degreeLabel = event.target.value as degreeLabelEnum;
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      degreeLabel,
    });
  };

  const handleSchoolTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const schoolType = event.target.value as 'vocational' | 'technical' | 'high_school';
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
  }, []);

  useEffect(() => {
    if (registerContext?.schoolsDB) {
      setSchools(registerContext?.schoolsDB.map((el) => el.name));
    }
  }, [registerContext?.schoolsDB]);

  useEffect(() => {
    if (registerContext?.profilesDB) {
      setProfiles(registerContext?.profilesDB.map((el) => el.name));
    }
  }, [registerContext?.profilesDB]);

  return (
    <RootBox>
      <StyledPaper theme={theme}>
        <Typography
          variant="h4"
          color={theme.palette.common.black}
          align="center"
          gutterBottom
          fontWeight="bold"
        >
          WYBIERZ SWÓJ STATUS
        </Typography>

        {/* Sekcja "Status" */}
        <FormControl component="fieldset" style={{ width: '100%', alignItems: 'flex-start' }}> {/* Zmieniono na 'flex-start', aby wyrównać napis "Status" do lewej */}
          <FormLabel
            component="legend"
            style={{ color: theme.palette.common.black, fontWeight: 'bold', fontSize: '25px', marginBottom: '10px' }} // Dodałem 'marginBottom' dla większego odstępu
          >
            Status
          </FormLabel>
          <StyledRadioGroup style={{ justifyContent: 'center' }} value={registerContext?.registerData.status} onChange={handleStatusChange}> {/* Dodano 'justifyContent: center' aby wyśrodkować przyciski */}
            <StyledFormControlLabel
              value="school"
              control={<InvisibleRadio />}
              label="Uczeń"
              theme={theme}
            />
            <StyledFormControlLabel
              value="study"
              control={<InvisibleRadio />}
              label="Student"
              theme={theme}
            />
          </StyledRadioGroup>
        </FormControl>

        {/* Sekcja "Rodzaj studenta" */}
        <FormControl component="fieldset" style={{ width: '100%', alignItems: 'flex-start' }}> {/* Zmieniono na 'flex-start', aby wyrównać napis "Rodzaj studenta" do lewej */}
          <FormLabel
            component="legend"
            style={{ color: theme.palette.common.black, fontWeight: 'bold', fontSize: '25px', marginBottom: '10px' }} // Dodałem 'marginBottom' dla większego odstępu
          >
            Status nauczania
          </FormLabel>
          <StyledRadioGroup style={{ justifyContent: 'center' }} value={registerContext.registerData.degreeLabel || ''} onChange={handleDegreeLabelChange}> {/* Dodano 'justifyContent: center' aby wyśrodkować przyciski */}
            <StyledFormControlLabel
              value={degreeLabelEnum.DURING}
              control={<InvisibleRadio />}
              label="W trakcie nauki"
              theme={theme}
            />
            <StyledFormControlLabel
              value={degreeLabelEnum.GRADUATE}
              control={<InvisibleRadio />}
              label="Zakończona nauka"
              theme={theme}
            />
          </StyledRadioGroup>
        </FormControl>

        {/* Sekcja "Rodzaj szkoły" */}
        {registerContext?.registerData.status === 'school' && (
          <>
            <StyledFormControl>
              <FormLabel
                component="legend"
                style={{ color: theme.palette.common.black, fontWeight: 'bold', fontSize: '25px' }}
              >
                Rodzaj szkoły
              </FormLabel>
              <Select
                value={registerContext.registerData.school_level || ''}
                onChange={handleSchoolTypeChange}
                variant="outlined"
                fullWidth
                displayEmpty
                style={{ marginTop: '10px' }}
              >
                <MenuItem value="" disabled>
                  Wybierz rodzaj szkoły
                </MenuItem>
                <MenuItem value="vocational">Zawodowa</MenuItem>
                <MenuItem value="technical">Technikum</MenuItem>
                <MenuItem value="high_school">Liceum</MenuItem>
              </Select>
            </StyledFormControl>

            {registerContext.registerData.school_level !== '' && (
              <>
                {/* Sekcja "Miasto" */}
                <StyledFormControl>
                  <FormLabel
                    component="legend"
                    style={{ color: theme.palette.common.black, fontWeight: 'bold', fontSize: '25px' }}
                  >
                    Miasto
                  </FormLabel>
                  <StyledPaper theme={theme}>
                    <Autocomplete
                      freeSolo
                      options={registerContext.citiesDB.map((element) => element)}
                      getOptionLabel={(option) => option.name}
                      inputValue={registerContext.registerData.school_city}
                      onInputChange={handleInputChangeCity}
                      onBlur={async () => {
                        await setSchools([]);
                        await registerContext.setSchoolsDB([]);
                        if (registerContext?.registerData.school_city) {
                          registerContext?.getSchoolsDB(
                            registerContext.registerData.school_city,
                            statusSchool(registerContext.registerData.school_level)
                          );
                        }
                      }}
                      renderOption={(props, option) => (
                        <li {...props} key={option.id}>
                          {option.name}
                        </li>
                      )}
                      renderInput={(params) => (
                        <StyledTextField {...params} variant="outlined" theme={theme} />
                      )}
                    />
                  </StyledPaper>
                </StyledFormControl>

                {registerContext.registerData.school_city.length > 0 && (
                  <>
                    {/* Sekcja "Nazwa Szkoły" */}
                    <StyledFormControl>
                      <FormLabel
                        component="legend"
                        style={{ color: theme.palette.common.black, fontWeight: 'bold', fontSize: '25px' }}
                      >
                        Nazwa Szkoły
                      </FormLabel>
                      <StyledPaper theme={theme}>
                        <Autocomplete
                          freeSolo
                          options={schools}
                          inputValue={registerContext.registerData.school_name}
                          onInputChange={handleInputChangeName}
                          onBlur={async () => {
                            setProfiles([]);
                            registerContext.setProfilesDB([]);
                            if (registerContext?.registerData.school_name) {
                              await registerContext?.getProfilesDB(registerContext.registerData.school_name);
                            }
                          }}
                          renderInput={(params) => (
                            <StyledTextField {...params} variant="outlined" theme={theme} />
                          )}
                        />
                      </StyledPaper>
                    </StyledFormControl>
                  </>
                )}

                {registerContext.registerData.school_city.length > 0 &&
                  registerContext.registerData.school_name.length > 0 && (
                    <>
                      {/* Sekcja "Profil" */}
                      <StyledFormControl>
                        <FormLabel
                          component="legend"
                          style={{ color: theme.palette.common.black, fontWeight: 'bold', fontSize: '25px' }}
                        >
                          Profil
                        </FormLabel>
                        <StyledPaper theme={theme}>
                          <Autocomplete
                            freeSolo
                            options={profiles}
                            inputValue={registerContext.registerData.school_profile}
                            onInputChange={handleInputChangeProfile}
                            renderInput={(params) => (
                              <StyledTextField {...params} variant="outlined" theme={theme} />
                            )}
                          />
                        </StyledPaper>
                      </StyledFormControl>
                    </>
                  )}
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
    </RootBox>
  );
};

export default StudentStatus;
