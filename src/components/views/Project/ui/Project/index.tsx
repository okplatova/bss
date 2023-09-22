import s from "./styles.module.sass";

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import Hero from "../Hero";
import TaskSection from "../TaskSection";
import ResultSection from "../ResultSection";
import VideoSection from "../VideoSection";
import Equipments from "../Equipments";
import AnotherProjects from "../AnotherProjects";

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
    label: "День Флага Российской Федерации",
  },
];

const Project = () => {
  return (
    <div className={s.project}>
      <Breadcrumbs items={breadcrumbs} />
      <Hero />
      <TaskSection />
      <ResultSection />
      <VideoSection />
      <Equipments />
      <AnotherProjects />
    </div>
  );
};

export default Project;
