// import Background from "@/components/Background";
import RegisterContextProvider from "@/context/register/RegisterContext";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RegisterContextProvider>
      <Box sx={{ backgroundColor: "white", scrollBehavior: "smooth" }}>
        <Component {...pageProps} />
      </Box>
    </RegisterContextProvider>
  );
}
