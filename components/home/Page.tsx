import * as React from "react";
import grafika from "../public/images/grafika2.webp";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import Background from "./Background";

const Page = () => {
  return (
    <Container id='page'>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Background path="/images/grafika3.webp" />
      </Box>
    </Container>
  );
};

export default Page;

