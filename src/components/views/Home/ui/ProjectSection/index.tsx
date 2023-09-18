import Link from "next/link";

import s from "./styles.module.sass";
import "swiper/css";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { ProjectSwiper } from "@/components/common/ProjectSwiper";

const ProjectSection = () => {
  return (
    <section className={`${s.section} container`}>
      <div className={s.top}>
        <SectionTitle label="Проекты" />
        <Link href="/" className={s.link}>
          <span>Все проекты</span>
          <ArrowRightIcon />
        </Link>
      </div>
      <div className={s.swiper}>
        <ProjectSwiper />
      </div>
    </section>
  );
};

export default ProjectSection;
