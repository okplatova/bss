import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { swiperItems } from "../../data/swiperItems";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import "swiper/css/navigation";
import s from "./styles.module.sass";

import { Fancybox } from "@/components/ui/Fancybox";
import { ArrowLeftIcon } from "@/components/ui/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { useGetVideostudio } from "@/shared/hooks";
import { Skeleton } from "@/components/ui/Skeleton";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  767: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

const PhotoSwiper = () => {
  const sliderRef = useRef(null);

  const { videostudion, isLoading } = useGetVideostudio();

  const handleNextSlide = () => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current?.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current?.swiper.slidePrev();
    //@ts-ignore
  };

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
          breakpoints={breakpoints}
        >
          {isLoading ? (
            <>
              {[...Array(6)].map((_, index) => (
                <SwiperSlide key={index}>
                  <Skeleton className={s.skeleton} />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {
                //@ts-ignore
                videostudion[0].CONTENT["Фото Студии"]?.map((photo: any) => (
                  <SwiperSlide data-caption={photo} key={photo}>
                    <div className={s.imageWrapper}>
                      <Image
                        data-fancybox="gallery"
                        src={`https://dev9.paradigma-digital.ru/${photo}`}
                        fill
                        alt="photo"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))
              }
            </>
          )}
        </Swiper>
      </Fancybox>

      <div className={s.swiperBottom}>
        <button onClick={handlePrevSlide} aria-label="navigation">
          <ArrowLeftIcon />
        </button>
        <button onClick={handleNextSlide} aria-label="navigation">
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default PhotoSwiper;
