


// import Background from "@/components/Background";
import Swither from "@/components/Swither";
import AuthContextProvider from "@/context/AuthContext";
import RegisterContextProvider from "@/context/register/RegisterContext";
import { SchoolsDataProvider } from "@/context/schoolsData/SchoolsDataProvider";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles"; // Poprawiony import
import maintheme from "@/theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SchoolsDataProvider>
      <AuthContextProvider>
        <RegisterContextProvider>
          <ThemeProvider theme={maintheme}> {/* Dodano theme jako atrybut */}
            <Box sx={{ backgroundColor: 'primary', scrollBehavior: "smooth" }}>
              <Component {...pageProps} />
              <Swither />
            </Box>
          </ThemeProvider>
        </RegisterContextProvider>
      </AuthContextProvider>
    </SchoolsDataProvider>
  );
}
