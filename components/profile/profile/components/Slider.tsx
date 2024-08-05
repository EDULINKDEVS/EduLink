import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/core';
import 'swiper/swiper-bundle.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay, Keyboard]);

interface SliderProps {
  enableSwipe: boolean;
  enableArrowNavigation: boolean;
  autoScrollInterval: number | null;
  enableNumericNavigation: boolean;
}

const Slider: React.FC<SliderProps> = ({
  enableSwipe,
  enableArrowNavigation,
  autoScrollInterval,
  enableNumericNavigation
}) => {
  return (
    <Box>
      <Swiper
        navigation={enableArrowNavigation}
        pagination={enableNumericNavigation ? { clickable: true } : false}
        autoplay={autoScrollInterval ? { delay: autoScrollInterval, disableOnInteraction: false } : false}
        keyboard={enableSwipe}
        allowTouchMove={enableSwipe}
      >
        <SwiperSlide><Box>Slide 1</Box></SwiperSlide>
        <SwiperSlide><Box>Slide 2</Box></SwiperSlide>
        <SwiperSlide><Box>Slide 3</Box></SwiperSlide>
        <SwiperSlide><Box>Slide 4</Box></SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Slider;
