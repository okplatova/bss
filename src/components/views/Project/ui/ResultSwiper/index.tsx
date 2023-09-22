import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import s from "./styles.module.sass";

import { ArrowLeftIcon } from "@/components/ui/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { resultList } from "../../data/resultList";
import Image from "next/image";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import lightGallery from "lightgallery";
import { Fancybox } from "@/components/ui/Fancybox";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ResultSwiper = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(1);
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current?.swiper.slideNext();
    //@ts-ignore
    setCurrentSlideIndex(sliderRef.current?.swiper.activeIndex + 1);
  };

  const handlePrevSlide = () => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current?.swiper.slidePrev();
    //@ts-ignore
    setCurrentSlideIndex(sliderRef.current?.swiper.activeIndex + 1);
  };

  useEffect(() => {
    //@ts-ignore
    setTotalSlides(sliderRef.current?.swiper.slides.length);
  }, []);

  return (
    <div className={s.swiper}>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Swiper
          ref={sliderRef}
          slidesPerView={3}
          spaceBetween={16}
          speed={800}
          className="mySwiper"
          centeredSlides={false}
        >
          {resultList.map((result) => (
            <SwiperSlide data-caption={result.img} key={result.id}>
              <div className={s.imageWrapper}>
                <Image
                  data-fancybox="gallery"
                  src={result.img}
                  fill
                  alt="result"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Fancybox>

      <div className={s.swiperBottom}>
        <div className={s.author}>
          <span className={s.type}>Фотограф: </span>
          <span className={s.name}>Дмитрий Мухин</span>
        </div>
        <button onClick={handlePrevSlide}>
          <ArrowLeftIcon />
        </button>
        <div className={s.progress}>
          <span>{currentSlideIndex}</span>
          <span> - </span>
          <span>{totalSlides}</span>
        </div>
        <button onClick={handleNextSlide}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default ResultSwiper;
