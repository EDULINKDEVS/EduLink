import { degreeEnum, degreeLabelEnum } from "@/context/register/types";
import { FormControl, FormControlLabel, Paper, RadioGroup, TextField } from "@mui/material";
import styled from "styled-components";

export type UniversityType = {
    name?: string;
    degree?: degreeEnum;
    id?: string;
    faculty?:string;
    city?: string;
    degreeLabel? :degreeLabelEnum ;
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
    color: 'primary',
    fontWeight: 'bold',
    '& .MuiTypography-root': {
      color: 'primary',
      fontWeight: 'bold',
    },
  });
  
  export const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'primary',
      },
      '&:hover fieldset': {
        borderColor: 'primary',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'primary',
      },
    },
    '& .MuiInputBase-input': {
      color: 'primary',
    },
    '& .MuiInputLabel-root': {
      color: 'primary',
    },
    width: '100%',
  });