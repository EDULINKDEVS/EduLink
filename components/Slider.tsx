import React, { useState, useEffect, useCallback } from "react";
import im2 from "../public/images/Twoja praca jest tutaj - 6.png";
import im3 from "../public/images/Twoja praca jest tutaj - 7.png";
import im4 from "../public/images/Twoja praca jest tutaj - 8.png";
import im5 from "../public/images/Twoja praca jest tutaj - 9.png";
import im6 from "../public/images/test.jpg";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = () => {
  const images = [im6, im3, im2, im4, im5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [nextImage]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton onClick={prevImage}>
        <ArrowBackIosNewIcon />
      </IconButton>

      <Image
        src={images[currentImageIndex]}
        style={{
          opacity: "1",
          animation: "2s showanim forwards",
        }}
        alt={`Slide ${currentImageIndex + 1}`}
        width={1200} 
        />
      <IconButton onClick={nextImage}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Slider;
