import {
  Box,
  Radio,
  FormLabel,
  Autocomplete,
  IconButton,
  Grid,
  Button
} from '@mui/material';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { degreeEnum } from '@/context/register/types';
import { RegisterContext } from '@/context/register/RegisterContext';
import InList from './InList';
import { StyledFormControl, StyledFormControlLabel, StyledPaper, StyledRadioGroup, StyledTextField, UniversityType } from './UniversityTypesAndFunctions';
import { cities } from '@/context/schoolsData/exampleSchoolsData';
import { generateUniversities } from './Validate';
import { useSchoolsData } from '@/context/schoolsData/SchoolsDataProvider';



const University = ({ city,faculty, name, degree, id }: UniversityType) => {
  const dataContext = useSchoolsData();
  const registerContext = useContext(RegisterContext);
  const [currentDegree, setCurrentDegree] = useState<degreeEnum | null>(null);
  const [currentName, setCurrentName] = useState('');
  const [duringStudies, setDuringStudies] = useState<boolean | null>(null);
  const [edit, setEdit] = useState(true);
  const [addable, setAddable] = useState(false);
  const [facultyName, setFacultyName] = useState('');
  const [cityName, setCityName] = useState('');
  const [citiesState, setCitiesState] = useState<string[]>([]);
  const [universities, setUniversities] = useState<string[]>([]); 
   useEffect(()=>{
    setCitiesState(dataContext.schoolsClass.cities);
  }, [dataContext.schoolsClass.cities])

  

  useEffect(() => {
    if (id && name && degree && city && faculty) {
      setCurrentName(name);
      setCurrentDegree(degree);
      setDuringStudies(degree === degreeEnum.DURING);
      setCityName(city);
      setFacultyName(faculty);
      setEdit(false);
    }else{
      setEdit(true);
    }
  }, [name, degree]);

  useEffect(() => {
    if (validate()) {
      setAddable(true);
    } else {
      setAddable(false);
    }
  }, [currentDegree, currentName, duringStudies, facultyName]);


  const handleInputChange = useCallback((event: React.SyntheticEvent, value: string) => {
    setFacultyName('');
    setCurrentName(value);
  }, []);

  const handleFacultyInputChange = useCallback((event: React.SyntheticEvent, value: string) => {
    setFacultyName(value);
  }, []);

  const handleCityInputChange = useCallback((event: React.SyntheticEvent, value: string) => {
    setCurrentName('');
    setFacultyName('');

    setCityName(value);
  }, []);

  const handleAdd = useCallback(() => {

    if (id) {
      if (duringStudies) {
        setCurrentDegree(degreeEnum.DURING);
        currentDegree &&
        registerContext?.handleEditSchool(currentName, cityName, facultyName, currentDegree, id);
      } else {
        currentDegree &&
        registerContext?.handleEditSchool(currentName, cityName, facultyName, currentDegree, id);
      }
    } else {
      if (duringStudies) {
        registerContext?.handleAddSchool(currentName, cityName, facultyName, degreeEnum.DURING);
      } else {
        currentDegree &&
        registerContext?.handleAddSchool(currentName, cityName, facultyName, currentDegree);
      }
      setCurrentDegree(null);
      setCurrentName('');
      setDuringStudies(null);
      setFacultyName('');
      setCityName('');      
    }
  }, [currentName, currentDegree, id, duringStudies, registerContext, facultyName, cityName]);

  const handleDelete = useCallback(() => {
    if (id) {
      registerContext?.handleRemoveSchool(id);
    }
  }, [id, registerContext]);
  const [faculties, setFaculties] = useState<string[]>([]);
  const validate = () => {
    if (duringStudies) {
      return currentName.length > 0 && facultyName.length > 0 && cityName.length > 0;
    }
    return currentName.length > 0 && currentDegree && facultyName.length > 0 && cityName.length;
  }
  return (
    <React.Fragment>
 

      {
        edit 
        ?
        
        <Box>
          <StyledFormControl>
            <StyledPaper>
              <Autocomplete
                freeSolo
                options={citiesState}
                inputValue={cityName}
                onBlur={() => {
                  setUniversities(dataContext.schoolsClass.generateUniversities(cityName));
              }}
                onInputChange={handleCityInputChange}
                renderInput={(params) => (
                  <StyledTextField
                  {...params}
                  label="Miasto"
                    variant="outlined"
                    />
                  )}
                  />
            </StyledPaper>
          </StyledFormControl>
          {
            cityName !== ''&&
            <StyledFormControl>
            <StyledPaper>
              <Autocomplete
                freeSolo

                options={universities}
                inputValue={currentName}
                onBlur={()=>{
                  setFaculties(dataContext.schoolsClass.generateFaculties(currentName));
                }}
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
          }
          
          {
            (currentName !== '' && cityName !== '' ) &&
            <>
          <StyledFormControl>
            <StyledPaper>
              <Autocomplete
                freeSolo
                options={faculties}
                inputValue={facultyName}
                onInputChange={handleFacultyInputChange}
                renderInput={(params) => (
                  <StyledTextField
                  {...params}
                  label="Kierunek"
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
          </>
          }
          {
            (currentName && !duringStudies && duringStudies !== null) &&
            <StyledFormControl>
              <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>Rodzaj absolwenta</FormLabel>
              <StyledRadioGroup
                value={currentDegree || ''}
                onChange={(event) => {
                  setCurrentDegree(event.target.value as degreeEnum);
                }}
                >
                <StyledFormControlLabel value={degreeEnum.BACHELOR} control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Licencjat" />
                <StyledFormControlLabel value={degreeEnum.ENGINEER} control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Inżynier" />
                <StyledFormControlLabel value={degreeEnum.MASTER} control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Magister" />
                <StyledFormControlLabel value={degreeEnum.DOCTOR} control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Doktor" />
              </StyledRadioGroup>
            </StyledFormControl>
          }
          {
              addable && <Button color="secondary" onClick={handleAdd}>
                Dodaj <AddIcon />
              </Button>
}
      </Box>
      :
      (id && currentDegree )?<InList id={id} name={currentName} city={cityName} degree={currentDegree} deleteFunction={handleDelete} editFunction={(value: boolean) => {setEdit(value)}}/> : `id: ${id} town: ${currentName}`
    }
    
    </React.Fragment>
  );
};

export default University;
