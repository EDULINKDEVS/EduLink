import React, { useContext } from 'react';
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
  Autocomplete
} from '@mui/material';
import { styled } from '@mui/system';
import { RegisterContext } from '@/context/register/RegisterContext';

const StyledPaper = styled(Paper)({
  padding: 20,
  width: '100%',
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

const suggestions = [
  'Techniku asdmoipms',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
];

const StudentStatus = ({ setStep }: { setStep: (value: number) => void }) => {
  const registerContext = useContext(RegisterContext);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const status = event.currentTarget.value as "school" | "study" | null;
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      status
    });
  };

  const handleSchoolTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const schoolType = event.currentTarget.value as "vocational" | "technical" | "high_school";
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      school_level: schoolType
    });
  };

  const handleSubmit = () => {
    setStep(1);
  };

  const handleInputChange = (event: React.SyntheticEvent, value: string) => {
    registerContext?.setRegisterData({
      ...registerContext.registerData,
      school_name: value,
    });
  };

  return (
    <Box sx={{ animation: '.7s showAnim forwards' }}>
      <Typography variant="h4" color="#A758B5" align="center" gutterBottom fontWeight={'bold'}>
        Wybierz swój status
      </Typography>
      <StyledPaper>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>Status</FormLabel>
          <StyledRadioGroup value={registerContext?.registerData.status} onChange={handleStatusChange}>
            <StyledFormControlLabel value="school" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="school" />
            <StyledFormControlLabel value="study" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="study" />
          </StyledRadioGroup>
        </FormControl>

        {registerContext?.registerData.status === 'school' && (
          <>
            <StyledFormControl>
              <FormLabel component="legend" style={{ color: '#A758B5', fontWeight: 'bold' }}>Rodzaj szkoły</FormLabel>
              <StyledRadioGroup value={registerContext.registerData.school_level} onChange={handleSchoolTypeChange}>
                <StyledFormControlLabel value="vocational" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="vocational" />
                <StyledFormControlLabel value="technical" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="technical" />
                <StyledFormControlLabel value="high_school" control={<Radio sx={{ color: '#A758B5', '&.Mui-checked': { color: '#A758B5' } }} />} label="high school" />
              </StyledRadioGroup>
            </StyledFormControl>
            {
              registerContext.registerData.school_level !== '' &&
            <StyledPaper>
              <Autocomplete
                freeSolo
                options={suggestions}
                inputValue={registerContext.registerData.school_name}
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
            }
          </>
        )}

        <StyledButton onClick={handleSubmit}>
          Dalej
        </StyledButton>
      </StyledPaper>
    </Box>
  );
};

export default StudentStatus;
