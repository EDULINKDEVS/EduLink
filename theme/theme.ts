import { createTheme } from '@mui/material/styles';
import { PaletteOptions } from '@mui/material/styles/createPalette';

// Rozszerz typy palety, aby uwzględniały niestandardowe kolory
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    custom: {
      main: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      main: string;
    };
  }
}

const maintheme = createTheme({
  palette: {
    primary: {
      main: '#0f0f43',
    },
    secondary: {
      main: '#FFEF00',
    },
    
    custom: {
      main: '#000000',
    },
  },
});

export default maintheme;
