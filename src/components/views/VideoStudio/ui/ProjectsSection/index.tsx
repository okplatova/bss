import { useEffect, useState } from "react";
import { useInView } from "react-hook-inview";

import s from "./styles.module.sass";

import { ProjectItem } from "@/components/common/ProjectItem";
import { Button } from "@/components/ui/Button";
import { Loader } from "@/components/ui/Loader";
import { useGetProjects, useGetVideostudio } from "@/shared/hooks";
import { SectionTitle } from "@/components/ui/SectionTitle";

const ProjectsSection = () => {
  const [isView, setView] = useState(false);
  const [allProjects, setAllProjects] = useState<any>(null);
  const [visibleProjects, setVisibleProjects] = useState<any>(null);
  const { videostudion } = useGetVideostudio();
  const [ref, inView] = useInView();

  const { projects, isLoading } = useGetProjects();

  useEffect(() => {
    //@ts-ignore
    setAllProjects(videostudion && videostudion[0].CONTENT["Видеопроекты"]);
    setVisibleProjects(
      //@ts-ignore
      videostudion && videostudion[0].CONTENT["Видеопроекты"].slice(0, 6)
    );
  }, [videostudion]);

  const showMore = () => {
    setVisibleProjects((prev: any) => [
      ...prev,
      ...projects.slice(
        visibleProjects.length - 1,
        visibleProjects.length - 1 + 6
      ),
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
                const link = project.DETAIL_PAGE_URL.replace(
                  "/video/",
                  "/projects/"
                );
                return (
                  <ProjectItem
                    link={link}
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
          {allProjects?.length <= visibleProjects?.length ? (
            <Button
              onClick={hideMore}
              size="medium"
              className={s.loadMore}
              ariaLabel="hide"
            >
              Скрыть
            </Button>
          ) : (
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
