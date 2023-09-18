import { ProjectSwiper } from "@/components/common/ProjectSwiper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";
import s from "./styles.module.sass";

const Projects = () => {
  return (
    <section className={s.projects}>
      <div className={`${s.top} container`}>
        <SectionTitle label="Проекты" />
      </div>
      <div className={`${s.swiper} container`}>
        <ProjectSwiper />
      </div>
    </section>
  );
};

export default Projects;
