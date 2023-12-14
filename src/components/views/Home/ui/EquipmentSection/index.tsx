import { useEffect, useState } from "react";
import Link from "next/link";
import { useInView } from "react-hook-inview";
import { Swiper, SwiperSlide } from "swiper/react";

import { equipmentList } from "../../data/equipmentsList";
import { Navigation } from "swiper/modules";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import EquipmentItem from "../EquipmentItem";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { useGetMainEquipment, useSwiperRef } from "@/shared/hooks";
import { ArrowLeftIcon } from "@/components/ui/ArrowLeftIcon";

const EquipmentSection = () => {
  const [navigationPrev, navigationPrevRef] = useSwiperRef();
  const [navigationNext, navigationNextRef] = useSwiperRef();
  const [isView, setView] = useState(false);
  const [ref, inView] = useInView();

  const { equipments, isLoading } = useGetMainEquipment();

  const equipmentListClass = `${s.equipmentList} ${isView ? s.isView : ""}`;

  useEffect(() => {
    if (inView) setView(true);
  }, [inView]);
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
    1280: {
      slidesPerView: 4,
    },
  };

  return (
    <section className={`${s.section} `}>
      <div className="container">
        <div className={s.top}>
          <SectionTitle label="Оборудование" color="black" />
          <Link href="/catalog" className={s.link}>
            <span>Смотреть все</span>
            <ArrowRightIcon />
          </Link>
        </div>
        <div ref={ref} className={equipmentListClass}>
          <Swiper
            slidesPerView={4}
            spaceBetween={16}
            speed={800}
            centeredSlides={false}
            breakpoints={breakpoints}
            modules={[Navigation]}
            className={`${s.swiper} equip-swiper`}
            navigation={{
              //@ts-ignore
              prevEl: navigationPrev,
              //@ts-ignore
              nextEl: navigationNext,
            }}
          >
            {
              //@ts-ignore
              equipments && equipments.ROOT && (
                <>
                  {
                    //@ts-ignore
                    Object.values(equipments.ROOT.CHILD).map(
                      (equipment: any, index) => {
                        return (
                          <SwiperSlide key={equipment.ID}>
                            <EquipmentItem
                              title={equipment.NAME}
                              img={equipment.PICTURE}
                              // customStyles={{
                              //   transition: `opacity 500ms ease ${delay}ms, background 500ms ease`,
                              // }}
                              className={s.equipmentItem}
                            />
                          </SwiperSlide>
                        );
                      }
                    )
                  }
                </>
              )
            }
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
      </div>
    </section>
  );
};

export default EquipmentSection;
