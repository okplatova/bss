import s from "./styles.module.sass";

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import Hero from "../Hero";
import TaskSection from "../TaskSection";
import ResultSection from "../ResultSection";
import VideoSection from "../VideoSection";
import Equipments from "../Equipments";
import AnotherProjects from "../AnotherProjects";
import { FC } from "react";

const Project: FC<any> = ({ project }) => {
  const breadcrumbs = [
    {
      label: "Главная",
      link: "/",
    },
    {
      label: "Проекты",
      link: "/projects",
    },
    {
      label: project.NAME,
    },
  ];

  return (
    <div className={s.project}>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title={project.NAME} img={project.DETAIL_PICTURE} />
      <TaskSection
        task={project.CONTENT.Задача.TEXT}
        decision={project.CONTENT.Решение.TEXT}
      />
      <ResultSection
        author={project.CONTENT.Фотограф}
        results={project.CONTENT["Результат"]}
      />
      <VideoSection video={project.CONTENT["Видео"]} />
      <Equipments />
      <AnotherProjects projects={project.CONTENT["Другие проекты"]} />
    </div>
  );
};

export default Project;
