import { FC, useEffect, useState } from "react";
import { useInView } from "react-hook-inview";
import { useGetProjects } from "@/shared/hooks";

import { IProjectContentProps } from "../../types/projectContent.interface";

import s from "./styles.module.sass";

import { ProjectItem } from "@/components/common/ProjectItem";
import { Button } from "@/components/ui/Button";
import { Loader } from "@/components/ui/Loader";

const ProjectContent: FC<any> = ({ projects, isGrid }) => {
  const [isView, setView] = useState(false);
  const [allProjects, setAllProjects] = useState<any>(null);
  const [visibleProjects, setVisibleProjects] = useState<any>(null);

  const [ref, inView] = useInView();

  // const { projects, isLoading } = useGetProjects();

  useEffect(() => {
    setAllProjects(projects);
    setVisibleProjects(projects.slice(0, 6));
  }, [projects]);

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

  const projectListClass = `${s.projectList} ${isView ? s.isView : ""} ${
    isGrid ? s.grid : s.list
  }`;

  return (
    <div className={s.content}>
      {!projects ? (
        <div className={s.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        <div className={projectListClass} ref={ref}>
          {visibleProjects.map((project: any, index: number) => {
            let delay;
            if (isView) {
              delay = (index + 1) * 150;
            }
            return (
              <ProjectItem
                title={project.NAME}
                year={project.CONTENT.Год}
                img={project.PREVIEW_PICTURE}
                key={project.ID}
                isGrid={isGrid}
                customStyles={{
                  transition: `opacity 500ms ease ${delay}ms, background 500ms ease`,
                }}
              />
            );
          })}
        </div>
      )}
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
              count={projects.length}
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

export default ProjectContent;
