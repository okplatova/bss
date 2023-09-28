import { useState } from "react";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import ProjectContent from "../ProjectContent";
import { Button } from "@/components/ui/Button";

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
  const [isGrid, setGrid] = useState(true);

  return (
    <div className={s.projects}>
      <Breadcrumbs items={breadcrumbs} />
      <div className={s.top}>
        <Title variant="h1" className={`${s.title} container`}>
          Проекты
        </Title>
        <div className={s.typeSelectors}>
          <Button
            onClick={() => setGrid(true)}
            size="large"
            ariaLabel="type"
            variable="clear"
            className={`${s.tab} ${isGrid ? s.active : ""}`}
          >
            Сеткой
          </Button>
          <Button
            onClick={() => setGrid(false)}
            size="large"
            ariaLabel="type"
            variable="clear"
            className={`${s.tab} ${!isGrid ? s.active : ""}`}
          >
            Списком
          </Button>
        </div>
      </div>
      <ProjectContent isGrid={isGrid} />
    </div>
  );
};

export default Projects;
