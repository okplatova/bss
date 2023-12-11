import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import s from "./styles.module.sass";

import { ArrowLeftIcon } from "@/components/ui/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { Skeleton } from "@/components/ui/Skeleton";
import { Player } from "@/components/common/Player";
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

const VideoSwiper: FC<any> = ({ video }) => {
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
        {video ? (
          <>
            {video.map((result: string, index: number) => (
              <SwiperSlide key={index}>
                <Player url={result} />
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

export default VideoSwiper;
