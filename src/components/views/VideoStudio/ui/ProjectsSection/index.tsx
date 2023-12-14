import { useEffect, useState } from "react";
import { useInView } from "react-hook-inview";

import s from "./styles.module.sass";

import { ProjectItem } from "@/components/common/ProjectItem";
import { Button } from "@/components/ui/Button";
import { Loader } from "@/components/ui/Loader";
import { useGetVideostudio } from "@/shared/hooks";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useGetVideoProjects } from "@/shared/hooks/useGetVideoProjects";

const ProjectsSection = () => {
  const [isView, setView] = useState(false);
  const [allProjects, setAllProjects] = useState<any>(null);
  const [visibleProjects, setVisibleProjects] = useState<any>(null);
  const { videostudion } = useGetVideostudio();
  const [ref, inView] = useInView();

  const { projects, isLoading } = useGetVideoProjects();

  useEffect(() => {
    //@ts-ignore
    setAllProjects(projects && projects);
    setVisibleProjects(
      //@ts-ignore
      allProjects && allProjects.slice(0, 6)
    );
  }, [allProjects, projects, videostudion]);

  const showMore = () => {
    setVisibleProjects((prev: any) => [
      ...prev,
      //@ts-ignore
      ...projects.slice(visibleProjects.length, visibleProjects.length + 6),
    ]);
  };

  useEffect(() => {
    if (inView) setView(true);
  }, [inView]);

  const hideMore = () => {
    setVisibleProjects(projects.slice(0, 6));
  };

  const projectListClass = `${s.projectList} ${isView ? s.isView : ""}`;
  const totalCount = allProjects?.length - visibleProjects?.length;

  return (
    <div className={s.content}>
      <SectionTitle label="Проекты" />
      {
        //@ts-ignore
        !videostudion ? (
          <div className={s.loaderWrapper}>
            <Loader />
          </div>
        ) : (
          <div className={projectListClass} ref={ref}>
            {visibleProjects &&
              //@ts-ignore
              visibleProjects.map((project: any, index: number) => {
                let delay;
                if (isView) {
                  delay = (index + 1) * 150;
                }

                return (
                  <ProjectItem
                    link={project.DETAIL_PAGE_URL}
                    title={project.NAME}
                    year={""}
                    img={project.PREVIEW_PICTURE}
                    key={project.NAME}
                    customStyles={{
                      transition: `opacity 500ms ease ${delay}ms, background 500ms ease`,
                    }}
                  />
                );
              })}
          </div>
        )
      }
      {allProjects?.length < 6 ? null : (
        <>
          {allProjects?.length <= visibleProjects?.length ? null : (
            <Button
              disabled={!allProjects}
              onClick={showMore}
              size="medium"
              className={s.loadMore}
              count={totalCount}
              ariaLabel="show"
            >
              Показать еще
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectsSection;
