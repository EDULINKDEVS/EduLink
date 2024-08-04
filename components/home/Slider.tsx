import React, { useState, useEffect, useCallback, ReactNode } from "react";
import im2 from "@/public/images/Twoja praca jest tutaj - 6.png";
import im3 from "@/public/images/Twoja praca jest tutaj - 7.png";
import im4 from "@/public/images/Twoja praca jest tutaj - 8.png";
import im5 from "@/public/images/Twoja praca jest tutaj - 9.png";
import im6 from "@/public/images/test.jpg";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = () => {
  const images = [im6, im3, im2, im4, im5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesComponents, setImagesComponents] = useState<ReactNode[]>([]);

  useEffect(() => {
    let temp: ReactNode[] = [];
    images.map((image, index) => {
      temp.push(
        <Image
          key={index}
          style={{
            animation: '2s showAnimLev1 forwards',
            height: 'auto',
            width: '100%'
          }}
          src={image}
          alt="image load error"
        />
      );
    });
  
    setImagesComponents(temp);
  }, [images]);

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
    const interval = setInterval(nextImage, 7000);
    return () => clearInterval(interval);
  }, [nextImage]);
  return (

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
      }}
    >
      <Box sx={{
        flex: 10
      }}>
        {imagesComponents[currentImageIndex]}
      </Box>
    </Box>
  );
};

export default Slider;
