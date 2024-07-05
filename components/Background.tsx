import { Box } from "@mui/material";
import React from "react";

import m from "../public/images/grafika3.webp";

const Background = ({ path }: { path: string }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        backgroundSize: "cover",
        backgroundImage: `url("/images/grafika3.webp")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    ></Box>
  );
};

export default Background;
