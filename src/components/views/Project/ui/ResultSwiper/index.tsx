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
  console.log("resultsresultsresultsresults", results);

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
          {results ? (
            <>
              {results.map((result: string, index: number) => (
                <SwiperSlide data-caption={result} key={index}>
                  <div className={s.imageWrapper}>
                    <Image
                      data-fancybox="gallery"
                      src={`https://dev9.paradigma-digital.ru/${result}`}
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
        <div className={s.author}>
          <span className={s.type}>Фотограф: </span>
          <span className={s.name}>
            {author ? author : <Skeleton className={s.authorSkeleton} />}
          </span>
        </div>
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

export default ResultSwiper;
