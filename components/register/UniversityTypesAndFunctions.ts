import { degreeEnum } from "@/context/register/types";
import { FormControl, FormControlLabel, Paper, RadioGroup, TextField } from "@mui/material";
import styled from "styled-components";

export type UniversityType = {
    name?: string;
    degree?: degreeEnum;
    id?: string;
    faculty?:string;
    city?: string;
  }
  
  export const StyledFormControl = styled(FormControl)({
    width: '100%',
  });
  
  export const StyledPaper = styled(Paper)({
    marginTop: '20px',
    width: '100%',
    boxShadow: 'none',
  });
  
  export const StyledRadioGroup = styled(RadioGroup)({
    display: 'flex',
    flexDirection: 'row',
  });
  
  export const StyledFormControlLabel = styled(FormControlLabel)({
    color: '#A758B5',
    fontWeight: 'bold',
    '& .MuiTypography-root': {
      color: '#A758B5',
      fontWeight: 'bold',
    },
  });
  
  export const StyledTextField = styled(TextField)({
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