import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

interface SliderProps {
  enableSwipe: boolean;
  enableArrowNavigation: boolean;
  autoScrollInterval: number | null;
  enableNumericNavigation: boolean;
  slides: string[];
}

const Slider: React.FC<SliderProps> = ({
  enableSwipe,
  enableArrowNavigation,
  autoScrollInterval,
  enableNumericNavigation,
  slides
}) => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, Keyboard]}
        navigation={enableArrowNavigation}
        pagination={enableNumericNavigation ? { clickable: true } : false}
        autoplay={autoScrollInterval ? { delay: autoScrollInterval, disableOnInteraction: false } : false}
        keyboard={{ enabled: enableSwipe }}
        allowTouchMove={enableSwipe}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide} alt="PHOTO ERROR" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
