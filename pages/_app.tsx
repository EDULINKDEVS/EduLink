import Swither from "@/components/Swither";
import AuthContextProvider from "@/context/AuthContext";
import RegisterContextProvider from "@/context/register/RegisterContext";
import { SchoolsDataProvider } from "@/context/schoolsData/SchoolsDataProvider";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import "@/styles/globals.css";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
    <SchoolsDataProvider>
      <AuthContextProvider>
        <RegisterContextProvider>
          <DndProvider backend={HTML5Backend}>

            <Box className="main-font" sx={{backgroundColor: theme.palette.primary.light, scrollBehavior: "smooth" }}>
              <Component {...pageProps} />
              <Swither />
            </Box>
          </DndProvider>
          
        </RegisterContextProvider>
      </AuthContextProvider>
    </SchoolsDataProvider>
    </ThemeProvider>
  );
}

