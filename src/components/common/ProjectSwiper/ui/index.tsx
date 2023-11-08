import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { projectList } from "../data/projectList";

import "swiper/css";
import "swiper/css/navigation";
import s from "./styles.module.sass";

import { ProjectItem } from "../../ProjectItem";
import { ArrowLeftIcon } from "@/components/ui/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { useGetProjects } from "@/shared/hooks";
import { Skeleton } from "@/components/ui/Skeleton";

interface IProjectSwiperProps {
  projects?: any;
  children: ReactNode;
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

const ProjectSwiper: FC<IProjectSwiperProps> = ({ projects, children }) => {
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
      <Swiper
        ref={sliderRef}
        slidesPerView={3}
        spaceBetween={16}
        speed={800}
        className="mySwiper"
        centeredSlides={false}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
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

export default ProjectSwiper;
