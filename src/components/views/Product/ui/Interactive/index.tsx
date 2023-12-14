import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { FC } from "react";
import { Fancybox } from "@/components/ui/Fancybox";
import { Navigation } from "swiper/modules";
import { Skeleton } from "@/components/ui/Skeleton";
import { ArrowLeftIcon } from "@/components/ui/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { useSwiperRef } from "@/shared/hooks";
const Interactive: FC<any> = ({ images, text }) => {
  const [navigationPrev, navigationPrevRef] = useSwiperRef();
  const [navigationNext, navigationNextRef] = useSwiperRef();

  return (
    <div className={s.interactive}>
      <SectionTitle label="Описание" />

      {images ? (
        <div className={s.swiperWrapper}>
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              speed={800}
              className="mySwiper"
              centeredSlides={false}
              modules={[Navigation]}
              navigation={{
                //@ts-ignore
                prevEl: navigationPrev,
                //@ts-ignore
                nextEl: navigationNext,
              }}
            >
              {images ? (
                <>
                  {images.map((result: string, index: number) => (
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
          <div className={s.navigation}>
            <button ref={navigationPrevRef} aria-label="navigation">
              <ArrowLeftIcon />
            </button>
            <button ref={navigationNextRef} aria-label="navigation">
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      ) : null}
      {text ? (
        <p>
          Отсутсвие задержки интерактивного эффекта обеспечивает сильное
          воздействие, удивительные и незабываемые впечатления зрителей
        </p>
      ) : null}
    </div>
  );
};

export default Interactive;
