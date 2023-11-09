import { ProjectItem } from "@/components/common/ProjectItem";
import s from "./styles.module.sass";

import { ProjectSwiper } from "@/components/common/ProjectSwiper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { Skeleton } from "@/components/ui/Skeleton";

interface IAnotherProjectsProps {
  projects?: any;
}

const AnotherProjects: FC<IAnotherProjectsProps> = ({ projects }) => {
  return (
    <div className={s.anotherProjects}>
      <SectionTitle label="Другие проекты" />
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
                  year={project.YEAR}
                  img={project.PREVIEW_PICTURE}
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </ProjectSwiper>
    </div>
  );
};

export default AnotherProjects;
