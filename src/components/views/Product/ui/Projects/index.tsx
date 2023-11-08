import { ProjectItem } from "@/components/common/ProjectItem";
import s from "./styles.module.sass";

import { ProjectSwiper } from "@/components/common/ProjectSwiper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Skeleton } from "@/components/ui/Skeleton";
import { SwiperSlide } from "swiper/react";
import { useGetProjects } from "@/shared/hooks";

const Projects = () => {
  const { projects } = useGetProjects();

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
                    title={project.NAME}
                    year={project.CONTENT.Год}
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
