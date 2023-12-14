import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { projectList } from "../data/projectList";

import "swiper/css";
import "swiper/css/navigation";
import s from "./styles.module.sass";

import { ProjectItem } from "../../ProjectItem";
import { ArrowLeftIcon } from "@/components/ui/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { useGetProjects, useSwiperRef } from "@/shared/hooks";
import { Navigation } from "swiper/modules";

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
  const [navigationPrev, navigationPrevRef] = useSwiperRef();
  const [navigationNext, navigationNextRef] = useSwiperRef();

  return (
    <div className={s.swiper}>
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
        {children}
      </Swiper>
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

export default ProjectSwiper;
