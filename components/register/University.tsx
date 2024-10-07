import {
  Box,
  FormLabel,
  Autocomplete,
  Button,
  useTheme,
  TextField,
} from '@mui/material';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { degreeEnum, degreeLabelEnum } from '@/context/register/types';
import { RegisterContext } from '@/context/register/RegisterContext';
import InList from './InList';
import { StyledFormControl } from './UniversityTypesAndFunctions';
import { useSchoolsData } from '@/context/schoolsData/SchoolsDataProvider';
import { styled, Theme } from '@mui/system';

// Zdefiniowanie propsów dla przycisku z `selected`
interface StyledButtonProps {
  theme: Theme;
  selected?: boolean;
}

const StyledButtonGroup = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  justifyContent: 'center',
  marginTop: '10px',
});

const StyledButtonOption = styled(Button)<StyledButtonProps>(({ theme, selected }) => ({
  width: '200px',
  height: '50px',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${selected ? theme.palette.primary.main : theme.palette.divider}`,
  backgroundColor: selected ? theme.palette.primary.light : theme.palette.common.white,
  color: selected ? theme.palette.common.black : theme.palette.common.black,
  cursor: 'pointer',
  fontSize: '1rem',
  textTransform: 'none', // Ustawienie, aby nie transformować tekstu
  transition: 'none', // Wyłącz wszelkie efekty przejścia
  // '&:hover': {
  //   backgroundColor: selected ? theme.palette.primary.main : theme.palette.grey[200],
  // },
}));

const University = ({ city, faculty, name, degree, id, degreeLabel }) => {
  const theme = useTheme();
  const dataContext = useSchoolsData();
  const registerContext = useContext(RegisterContext);
  const [currentDegree, setCurrentDegree] = useState<degreeEnum | null>(null);
  const [currentName, setCurrentName] = useState<string>('');
  const [currentDegreeLabel, setCurrentDegreeLabel] = useState<degreeLabelEnum | null>(null);
  const [edit, setEdit] = useState<boolean>(true);
  const [addable, setAddable] = useState<boolean>(false);
  const [facultyName, setFacultyName] = useState<string>('');
  const [cityName, setCityName] = useState<string>('');
  const [schools, setSchools] = useState<string[]>([]);
  const [profiles, setProfiles] = useState<string[]>([]);

  useEffect(() => {
    if (id && name && degree && city && faculty && degreeLabel) {
      setCurrentName(name);
      setCurrentDegree(degree);
      setCurrentDegreeLabel(degreeLabel);
      setCityName(city);
      setFacultyName(faculty);
      setEdit(false);
    } else {
      setEdit(true);
    }
  }, [name, degree, city, faculty, id, degreeLabel]);

  useEffect(() => {
    setSchools(registerContext?.schoolsDB?.map(el => el.name) || []);
  }, [registerContext?.schoolsDB]);

  useEffect(() => {
    setProfiles(registerContext?.profilesDB?.map(el => el.name) || []);
  }, [registerContext?.profilesDB]);

  useEffect(() => {
    const validate = () => {
      return (
        currentName.length > 0 &&
        facultyName.length > 0 &&
        cityName.length > 0 &&
        currentDegreeLabel !== null &&
        currentDegree !== null
      );
    };
    setAddable(validate());
  }, [currentDegree, currentName, cityName, currentDegreeLabel, facultyName]);

  const handleInputChange = useCallback(
    (event: React.SyntheticEvent<Element>, value: string) => {
      setFacultyName('');
      setCurrentName(value);
    },
    []
  );

  const handleFacultyInputChange = useCallback(
    (event: React.SyntheticEvent<Element>, value: string) => {
      setFacultyName(value);
    },
    []
  );

  const handleCityInputChange = useCallback(
    (event: React.SyntheticEvent<Element>, value: string) => {
      setCurrentName('');
      setFacultyName('');
      setCityName(value);
    },
    []
  );

  const handleAdd = useCallback(() => {
    if (id && currentDegree && currentDegreeLabel) {
      registerContext?.handleEditSchool(
        currentName,
        cityName,
        facultyName,
        currentDegree,
        id,
        currentDegreeLabel,
        registerContext.dispatch
      );
      setEdit(false);
    } else {
      if (currentDegree && currentDegreeLabel) {
        registerContext?.handleAddSchool(
          currentName,
          cityName,
          facultyName,
          currentDegree,
          currentDegreeLabel,
          registerContext.dispatch
        );
        setCurrentDegree(null);
        setCurrentName('');
        setCurrentDegreeLabel(null);
        setFacultyName('');
        setCityName('');
      }
    }
  }, [currentName, currentDegree, id, currentDegreeLabel, registerContext, facultyName, cityName]);

  const handleDelete = useCallback(() => {
    if (id) {
      registerContext?.handleRemoveSchool(id, registerContext.dispatch);
    }
  }, [id, registerContext]);

  return (
    <React.Fragment>
      {edit ? (
        <Box>
          {/* Miasto */}
          <StyledFormControl>
            <FormLabel
              component="legend"
              style={{ color: theme.palette.common.black, fontWeight: 'bold', fontSize: '25px', marginBottom: '10px' }}
            >
              Miasto
            </FormLabel>
            <Autocomplete
              freeSolo
              options={registerContext?.citiesDB?.map(element => element.name) || []}
              inputValue={cityName}
              onBlur={() => {
                registerContext?.getSchoolsDB(cityName, 'universities');
              }}
              onInputChange={handleCityInputChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    style: { color: theme.palette.common.black },
                  }}
                  InputLabelProps={{
                    style: { color: theme.palette.common.black },
                  }}
                />
              )}
            />
          </StyledFormControl>

          {/* Nazwa szkoły */}
          {cityName !== '' && (
            <StyledFormControl>
              <FormLabel
                component="legend"
                style={{ color: theme.palette.common.black, fontWeight: 'bold', fontSize: '25px', marginBottom: '10px' }}
              >
                Nazwa szkoły
              </FormLabel>
              <Autocomplete
                freeSolo
                options={schools}
                inputValue={currentName}
                onBlur={() => {
                  registerContext?.getProfilesDB(currentName);
                }}
                onInputChange={handleInputChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      style: { color: theme.palette.common.black },
                    }}
                    InputLabelProps={{
                      style: { color: theme.palette.common.black },
                    }}
                  />
                )}
              />
            </StyledFormControl>
          )}

          {/* Kierunek */}
          {currentName !== '' && cityName !== '' && (
            <StyledFormControl>
              <FormLabel
                component="legend"
                style={{ color: theme.palette.common.black, fontWeight: 'bold', fontSize: '25px', marginBottom: '10px' }}
              >
                Kierunek
              </FormLabel>
              <Autocomplete
                freeSolo
                options={profiles}
                inputValue={facultyName}
                onInputChange={handleFacultyInputChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      style: { color: theme.palette.common.black },
                    }}
                    InputLabelProps={{
                      style: { color: theme.palette.common.black },
                    }}
                  />
                )}
              />
            </StyledFormControl>
          )}

          {/* Rodzaj studenta */}
          {currentName !== '' && cityName !== '' && facultyName !== '' && (
            <StyledFormControl>
              <FormLabel
                component="legend"
                style={{ color: theme.palette.common.black, fontWeight: 'bold', fontSize: '25px', marginBottom: '10px' }}
              >
                Rodzaj studenta
              </FormLabel>
              <StyledButtonGroup>
                <StyledButtonOption
                  selected={currentDegreeLabel === degreeLabelEnum.DURING}
                  onClick={() => setCurrentDegreeLabel(degreeLabelEnum.DURING)}
                  theme={theme}
                >
                  W trakcie
                </StyledButtonOption>
                <StyledButtonOption
                  selected={currentDegreeLabel === degreeLabelEnum.GRADUATE}
                  onClick={() => setCurrentDegreeLabel(degreeLabelEnum.GRADUATE)}
                  theme={theme}
                >
                  Absolwent
                </StyledButtonOption>
              </StyledButtonGroup>
            </StyledFormControl>
          )}

          {/* Rodzaj absolwenta */}
          {currentDegreeLabel !== null && (
            <StyledFormControl>
              <FormLabel
                component="legend"
                style={{ color: theme.palette.common.black, fontWeight: 'bold', fontSize: '25px', marginBottom: '10px' }}
              >
                Rodzaj absolwenta
              </FormLabel>
              <StyledButtonGroup>
                <StyledButtonOption
                  selected={currentDegree === degreeEnum.BACHELOR}
                  onClick={() => setCurrentDegree(degreeEnum.BACHELOR)}
                  theme={theme}
                >
                  Licencjat
                </StyledButtonOption>
                <StyledButtonOption
                  selected={currentDegree === degreeEnum.ENGINEER}
                  onClick={() => setCurrentDegree(degreeEnum.ENGINEER)}
                  theme={theme}
                >
                  Inżynier
                </StyledButtonOption>
                <StyledButtonOption
                  selected={currentDegree === degreeEnum.MASTER}
                  onClick={() => setCurrentDegree(degreeEnum.MASTER)}
                  theme={theme}
                >
                  Magister
                </StyledButtonOption>
                <StyledButtonOption
                  selected={currentDegree === degreeEnum.DOCTOR}
                  onClick={() => setCurrentDegree(degreeEnum.DOCTOR)}
                  theme={theme}
                >
                  Doktor
                </StyledButtonOption>
              </StyledButtonGroup>
            </StyledFormControl>
          )}

          {/* Dodaj button */}
          {addable && (
            <Button onClick={handleAdd} sx={{ color: theme.palette.primary.main}}>
              Dodaj <AddIcon />
            </Button>
          )}
        </Box>
      ) : currentDegreeLabel && id && currentDegree ? (
        <InList id={id} name={currentName} city={cityName} degree={currentDegree} deleteFunction={handleDelete} editFunction={(value) => { setEdit(value) }} degreeLabel={currentDegreeLabel} />
      ) : (
        `id: ${id} town: ${currentName}`
      )}
    </React.Fragment>
  );
};

export default University;
