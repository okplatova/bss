import s from "./styles.module.sass";

import { ProjectSwiper } from "@/components/common/ProjectSwiper";
import { SectionTitle } from "@/components/ui/SectionTitle";

const AnotherProjects = () => {
  return (
    <div className={s.anotherProjects}>
      <SectionTitle label="Другие проекты" />
      <ProjectSwiper />
    </div>
  );
};

export default AnotherProjects;
