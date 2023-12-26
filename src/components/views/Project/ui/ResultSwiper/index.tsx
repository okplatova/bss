import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { resultList } from "../../data/resultList";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import s from "./styles.module.sass";

import { Fancybox } from "@/components/ui/Fancybox";
import { ArrowLeftIcon } from "@/components/ui/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { Skeleton } from "@/components/ui/Skeleton";
import { useSwiperRef } from "@/shared/hooks";
import { Navigation } from "swiper/modules";

interface IResultSwiperProps {
  author?: string;
  results: any;
}

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

const ResultSwiper: FC<IResultSwiperProps> = ({ author, results }) => {
  const [navigationPrev, navigationPrevRef] = useSwiperRef();
  const [navigationNext, navigationNextRef] = useSwiperRef();

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
          {results ? (
            <>
              {results.map((result: string, index: number) => (
                <SwiperSlide data-caption={result} key={index}>
                  <div className={s.imageWrapper}>
                    <Image
                      data-fancybox="gallery"
                      src={`https://adm.bss-tv.com/${result}`}
                      fill
                      alt="result"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {[...Array(5)].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className={s.imageWrapper}>
                    <Skeleton className={s.skeleton} />
                  </div>
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </Fancybox>

      <div className={s.swiperBottom}>
        {author ? (
          <div className={s.author}>
            <span className={s.type}>Фотограф: </span>
            <span className={s.name}>{author}</span>
          </div>
        ) : null}

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

export default ResultSwiper;
