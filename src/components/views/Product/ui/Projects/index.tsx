import { ProjectItem } from "@/components/common/ProjectItem";
import s from "./styles.module.sass";

import { ProjectSwiper } from "@/components/common/ProjectSwiper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Skeleton } from "@/components/ui/Skeleton";
import { SwiperSlide } from "swiper/react";
import { useGetProjects } from "@/shared/hooks";
import { FC } from "react";

const Projects: FC<any> = ({ projects }) => {
  return (
    <section className={s.projects}>
      <div className={`${s.top} container`}>
        <SectionTitle label="Проекты" />
      </div>
      <div className={`${s.swiper} container`}>
        <ProjectSwiper>
          {!projects ? (
            <>
              {[...Array(6)].map((_, index) => (
                <SwiperSlide key={index}>
                  <Skeleton className={s.skeleton} />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {projects?.map((project: any) => (
                <SwiperSlide key={project.ID}>
                  <ProjectItem
                    link={project.DETAIL_PAGE_URL}
                    title={project.NAME}
                    year={project.YEAR}
                    img={project.PREVIEW_PICTURE}
                  />
                </SwiperSlide>
              ))}
            </>
          )}
        </ProjectSwiper>
      </div>
    </section>
  );
};

export default Projects;
