import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import ProjectContent from "../ProjectContent";

const breadcrumbs = [
  {
    label: "Главная",
    link: "/",
  },
  {
    label: "Проекты",
  },
];

const Projects = () => {
  return (
    <div className={s.projects}>
      <Breadcrumbs items={breadcrumbs} />
      <div className={s.top}>
        <Title variant="h1" className={`${s.title} container`}>
          Проекты
        </Title>
      </div>
      <ProjectContent />
    </div>
  );
};

export default Projects;
