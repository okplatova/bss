import s from "./styles.module.sass";

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import Hero from "../Hero";
import TaskSection from "../TaskSection";
import ResultSection from "../ResultSection";
import VideoSection from "../VideoSection";
import Equipments from "../Equipments";
import AnotherProjects from "../AnotherProjects";
import { FC } from "react";
import VideoSwiper from "../VideoSwiper";
import { useRouter } from "next/router";

const Project: FC<any> = ({ project }) => {
  const { asPath } = useRouter();

  const breadcrumbs = [
    {
      label: "Главная",
      link: "/",
    },
    {
      label: asPath.includes("video") ? "видеостудия" : "Проекты",
      link: asPath.includes("video") ? "/video-studio" : "/projects",
    },
    {
      label: project.NAME,
    },
  ];
  return (
    <div className={s.project}>
      <Breadcrumbs items={breadcrumbs} />
      {project.DETAIL_PICTURE ? (
        <Hero title={project.NAME} img={project.DETAIL_PICTURE} />
      ) : null}

      <TaskSection
        task={project.CONTENT.Задача.TEXT}
        decision={project.CONTENT.Решение.TEXT}
        location={project.CONTENT.Локация}
        date={project.DATE_ACTIVE_FROM}
      />
      {project.CONTENT["Результат"] ? (
        <ResultSection
          author={project.CONTENT.Фотограф}
          results={project.CONTENT["Результат"]}
        />
      ) : null}

      {project.CONTENT["Видео"] ? (
        <VideoSection video={project.CONTENT["Видео"]} />
      ) : null}
      {project.CONTENT["Оборудование"] ? (
        <Equipments equipmentsList={project.CONTENT["Оборудование"]} />
      ) : null}

      {project.CONTENT["Другие проекты"] ? (
        <AnotherProjects projects={project.CONTENT["Другие проекты"]} />
      ) : null}
    </div>
  );
};

export default Project;
