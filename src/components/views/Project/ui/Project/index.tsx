import { Title } from "@/components/ui/Title";
import s from "./styles.module.sass";
import Hero from "../Hero";
import TaskSection from "../TaskSection";
import ResultSection from "../ResultSection";
import VideoSection from "../VideoSection";
import Equipments from "../Equipments";
import AnotherProjects from "../AnotherProjects";

const Project = () => {
  return (
    <div className={s.project}>
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
