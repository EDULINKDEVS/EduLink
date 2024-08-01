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
import { degreeEnum, degreeLabelEnum } from '@/context/register/types';
import { RegisterContext } from '@/context/register/RegisterContext';
import InList from './InList';
import { StyledFormControl, StyledFormControlLabel, StyledPaper, StyledRadioGroup, StyledTextField, UniversityType } from './UniversityTypesAndFunctions';
import { cities } from '@/context/schoolsData/exampleSchoolsData';
import { generateUniversities } from './Validate';
import { useSchoolsData } from '@/context/schoolsData/SchoolsDataProvider';



const University = ({ city,faculty, name, degree, id, degreeLabel }: UniversityType) => {
  const dataContext = useSchoolsData();
  const registerContext = useContext(RegisterContext);
  const [currentDegree, setCurrentDegree] = useState<degreeEnum | null>(null);
  const [currentName, setCurrentName] = useState('');
  const [currentDegreeLabel, setCurrentDegreeLabel] = useState<degreeLabelEnum | null>(null);
  const [edit, setEdit] = useState(true);
  const [addable, setAddable] = useState(false);
  const [facultyName, setFacultyName] = useState('');
  const [cityName, setCityName] = useState('');
  const [citiesState, setCitiesState] = useState<string[]>([]);
  const [universities, setUniversities] = useState<string[]>([]); 
  const [edited, setEdited] = useState(false);
   useEffect(()=>{
    setCitiesState(dataContext.schoolsClass.cities);
  }, [dataContext.schoolsClass.cities])
  

  useEffect(() => {
    if (id && name && degree && city && faculty && degreeLabel) {
      setCurrentName(name);
      setCurrentDegree(degree);
      setCurrentDegreeLabel(degreeLabel);
      setCityName(city);
      setFacultyName(faculty);
      setEdit(false);
    }else{
      setEdit(true);
    }
  }, [name, degree, city, faculty, id, degreeLabel]);

  useEffect(() => {
    const validate = () => {
      return  currentName.length > 0 && facultyName.length > 0 && cityName.length > 0 && currentDegreeLabel !== null && currentDegree !== null;
    }
  
    if (validate()) {
      setAddable(true);
    } else {
      setAddable(false);
    }
  }, [currentDegree, currentName, cityName.length, currentDegreeLabel, facultyName]);


  const handleInputChange = useCallback((event: React.SyntheticEvent, value: string) => {
    setFacultyName('');
    setCurrentName(value);
  }, []);

  const handleFacultyInputChange = useCallback((event: React.SyntheticEvent, value: string) => {
    setEdited(true);

    setFacultyName(value);
  }, []);

  const handleCityInputChange = useCallback((event: React.SyntheticEvent, value: string) => {
    setCurrentName('');
    setFacultyName('');

    setCityName(value);
  }, []);

  const handleAdd = useCallback(() => {
    if(id && currentDegree && currentDegreeLabel){
      registerContext?.handleEditSchool(currentName, cityName, facultyName, currentDegree, id, currentDegreeLabel);
      setEdit(false);
    }
    else{
      (currentDegree && currentDegreeLabel)&& registerContext?.handleAddSchool(currentName, cityName, facultyName, currentDegree, currentDegreeLabel);
         setCurrentDegree(null);
      setCurrentName('');
      setCurrentDegreeLabel(null);
      setFacultyName('');
      setCityName('');      
    }
  }, [currentName, currentDegree, id, currentDegreeLabel, registerContext, facultyName, cityName]);

  const handleDelete = useCallback(() => {
    if (id) {
      registerContext?.handleRemoveSchool(id);
    }
  }, [id, registerContext]);
  const [faculties, setFaculties] = useState<string[]>([]);

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
              value={currentDegreeLabel === null ? '' : (currentDegreeLabel)}
              onChange={(event) => {
                setCurrentDegreeLabel(event.target.value as degreeLabelEnum);
              }}
              >
              <StyledFormControlLabel value={degreeLabelEnum.DURING} control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="W trakcie" />
              <StyledFormControlLabel value={degreeLabelEnum.GRADUATE} control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="Absolwent" />
            </StyledRadioGroup>
          </StyledFormControl>
          </>
          }
          {currentDegreeLabel !== null &&
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
      currentDegreeLabel && (id && currentDegree )?<InList id={id} name={currentName} city={cityName} degree={currentDegree} deleteFunction={handleDelete} editFunction={(value: boolean) => {setEdit(value)}} degreeLabel={currentDegreeLabel}/> : `id: ${id} town: ${currentName}`
    }
    
    </React.Fragment>
  );
};

export default University;
