import { degreeEnum, degreeLabelEnum } from "@/context/register/types";
import { FormControl, FormControlLabel, Paper, RadioGroup, TextField, useTheme } from "@mui/material";
import styled from "styled-components";
import theme from "@/theme/theme";
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
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    '& .MuiTypography-root': {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
  });
  
  export const StyledTextField = styled(TextField)({
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