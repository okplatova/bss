import { useEffect, useState } from "react";
import { projectList } from "../../data/projectList";

import s from "./styles.module.sass";

import { ProjectItem } from "@/components/common/ProjectItem";
import { Button } from "@/components/ui/Button";
import { Loader } from "@/components/ui/Loader";

const ProjectContent = () => {
  const [allProjects, setAllProjects] = useState<any>(null);
  const [visibleProjects, setVisibleProjects] = useState<any>(null);

  const fetchFunc = () => {
    fetch("/db/projects.json")
      .then((res) => res.json())
      .then((result) => {
        setAllProjects(result);
        setVisibleProjects(result.slice(0, 6));
      });
  };

  useEffect(() => {
    fetchFunc();
  }, []);

  const showMore = () => {
    setVisibleProjects((prev: any) => [
      ...prev,
      ...allProjects.slice(
        visibleProjects.length - 1,
        visibleProjects.length - 1 + 6
      ),
    ]);
  };
  const hideMore = () => {
    setVisibleProjects(allProjects.slice(0, 6));
  };

  return (
    <div className={s.content}>
      {!visibleProjects ? (
        <div className={s.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        <div className={s.projectList}>
          {visibleProjects.map((project: any) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              year={project.year}
              img={project.img}
            />
          ))}
        </div>
      )}
      {allProjects?.length <= visibleProjects?.length ? (
        <Button onClick={hideMore} size="medium" className={s.loadMore}>
          Скрыть
        </Button>
      ) : (
        <Button
          disabled={true}
          onClick={showMore}
          size="medium"
          className={s.loadMore}
          count={123}
        >
          Показать еще
        </Button>
      )}
    </div>
  );
};

export default ProjectContent;
