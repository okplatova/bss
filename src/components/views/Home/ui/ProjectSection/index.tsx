import Link from "next/link";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { ProjectSwiper } from "@/components/common/ProjectSwiper";
import { useGetMainEquipment, useGetProjects } from "@/shared/hooks";
import { SwiperSlide } from "swiper/react";
import { Skeleton } from "@/components/ui/Skeleton";
import { ProjectItem } from "@/components/common/ProjectItem";

const ProjectSection = () => {
  const { projects } = useGetProjects();
  const { equipments, isLoading } = useGetMainEquipment();

  return (
    <section className={`${s.section} container`}>
      <div className={s.top}>
        <SectionTitle label="Проекты" />
        <Link href="/projects" className={s.link}>
          <span>Все проекты</span>
          <ArrowRightIcon />
        </Link>
      </div>
      <div className={s.swiper}>
        <ProjectSwiper>
          {
            //@ts-ignore
            equipments && !equipments.PROJECTS ? (
              <>
                {[...Array(6)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <Skeleton className={s.skeleton} />
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <>
                {equipments &&
                  //@ts-ignore
                  equipments.PROJECTS?.map((project: any) => (
                    <SwiperSlide key={project.ID}>
                      <ProjectItem
                        link={project.DETAIL_PAGE_URL}
                        title={project.NAME}
                        year={project.PROPERTY_YEAR}
                        img={project.PREVIEW_PICTURE}
                      />
                    </SwiperSlide>
                  ))}
              </>
            )
          }
        </ProjectSwiper>
      </div>
    </section>
  );
};

export default ProjectSection;
