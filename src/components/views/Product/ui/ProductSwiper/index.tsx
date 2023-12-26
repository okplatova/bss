import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import { Navigation, Thumbs } from "swiper/modules";
import "react-image-gallery/styles/css/image-gallery.css";

import s from "./styles.module.sass";

import { Fancybox } from "@/components/ui/Fancybox";
import { Skeleton } from "@/components/ui/Skeleton";
import { ArrowLeftIcon } from "@/components/ui/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { useSwiperRef } from "@/shared/hooks";

const ProductSwiper: FC<any> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [navigationPrev, navigationPrevRef] = useSwiperRef();
  const [navigationNext, navigationNextRef] = useSwiperRef();
  return (
    <div className={s.swiper}>
      <div className={s.swiperInner}>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <Swiper
            spaceBetween={10}
            thumbs={{
              swiper:
                //@ts-ignore
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Thumbs]}
            className={s.mainImage}
          >
            {images.map((image: string) => (
              <SwiperSlide
                data-caption={`https://adm.bss-tv.com/${image}`}
                key={image}
              >
                <div className={s.imageWrapper}>
                  <Image
                    data-fancybox="gallery"
                    src={`https://adm.bss-tv.com/${image}`}
                    fill
                    alt="product"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fancybox>
        <Swiper
          //@ts-ignore
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Thumbs, Navigation]}
          className={`${s.thumbs} swiper-thumbs`}
          navigation={{
            //@ts-ignore
            prevEl: navigationPrev,
            //@ts-ignore
            nextEl: navigationNext,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.6,
            },
            767: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {images.map((image: string) => (
            <SwiperSlide
              data-caption={`https://adm.bss-tv.com/${image}`}
              key={image}
            >
              <div className={s.imageWrapper}>
                <Image
                  data-fancybox="gallery"
                  src={`https://adm.bss-tv.com/${image}`}
                  fill
                  alt="product"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={s.navigation}>
          <button ref={navigationPrevRef} aria-label="navigation">
            <ArrowLeftIcon />
          </button>
          <button ref={navigationNextRef} aria-label="navigation">
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSwiper;
