import React, { ReactNode } from "react";
import { Box, useTheme } from "@mui/material";

type userOptionType = {
  icon: ReactNode;
  text: string;
};

const Useroption = ({ icon, text }: userOptionType) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',

        "&:hover": {
          ".icon-text": {
            visibility: "visible",
            opacity: 1,
          },
        },
      }}
    >
      <Box
        className="optionBox"
        sx={{
          boxShadow: '0px 3px 6px 0px black',

          borderRadius: "50%",
          backgroundColor: '#f5f5f5',
          width: "55px",
          height: "55px",
          transition: "all .9s",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          position: "relative",
          fontSize: "25px",
          color: theme.palette.primary.main
          
        }}
      >
        {icon}

        <Box
          className="icon-text"
          sx={{
            position: "absolute",
            textWrap: 'nowrap',
            top: "100%",
            width: '100%',
            left: "50%",
            transform: "translateX(-50%)",
            color: theme.palette.primary.main,
            padding: "5px 10px",
            borderRadius: "5px",
            marginTop: "5px",
            secondarySpace: "nowrap",
            visibility: "hidden",
            opacity: 0,
            transition: "visibility 0s, opacity 0.5s linear",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          {text}
        </Box>
      </Box>
    </Box>
  );
};

export default Useroption;
