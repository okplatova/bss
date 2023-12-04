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
import { useGetVideostudio, useSwiperRef } from "@/shared/hooks";
import { Skeleton } from "@/components/ui/Skeleton";
import { Navigation } from "swiper/modules";

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
  const [navigationPrev, navigationPrevRef] = useSwiperRef();
  const [navigationNext, navigationNextRef] = useSwiperRef();

  const { videostudion, isLoading } = useGetVideostudio();

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
          slidesPerView={3}
          spaceBetween={16}
          speed={800}
          className="mySwiper"
          centeredSlides={false}
          breakpoints={breakpoints}
          modules={[Navigation]}
          navigation={{
            //@ts-ignore
            prevEl: navigationPrev,
            //@ts-ignore
            nextEl: navigationNext,
          }}
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
        <button ref={navigationPrevRef} aria-label="navigation">
          <ArrowLeftIcon />
        </button>
        <button ref={navigationNextRef} aria-label="navigation">
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default PhotoSwiper;
