import { projectList } from "../../data/projectList";

import s from "./styles.module.sass";

import { ProjectItem } from "@/components/common/ProjectItem";
import { Button } from "@/components/ui/Button";

const ProjectContent = () => {
  return (
    <div className={s.content}>
      <div className={s.projectList}>
        {projectList.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            year={project.year}
            img={project.img.src}
          />
        ))}
      </div>
      <Button size="medium" className={s.loadMore} count={123}>
        Показать еще
      </Button>
    </div>
  );
};

export default ProjectContent;
