import { FC, useState } from "react";

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

const Projects: FC<any> = ({ projects }) => {
  const [isGrid, setGrid] = useState(true);

  return (
    <div className={s.projects}>
      <Breadcrumbs items={breadcrumbs} />
      <div className={s.top}>
        <Title variant="h1" className={`${s.title} container`}>
          Проекты
        </Title>
        <p className="container">
          С момента создания, компания принимала участие в подготовке и
          реализации многих значимых и технически сложных проектов, среди
          которых можно отметить: Инаугурации Президента РФ 2008, 2014 и 2018
          годов; все пямые линии и пресс-конференции Президента РФ;
          торжественные мероприятия, посвященные 60-летию, 65-летию и 70-ти
          летию Великой Победы на Красной Площади; все значимые мероприятия в
          ходе проведения Чемпионата Мира по футболу 2018 года; Премии
          телеканала МУЗ-ТВ, «Золотой Граммофон»; Чемпионат Мира по легкой
          атлетике 2013 года; Конкурс Красоты «Мисс Вселенная» 2013 года;
          концерты мировых звезд, среди которых: Пол Маккартни, Элтон Джон,
          Scorpions, Metallica, Roxette, Imagine Dragons, Iron Maiden.
        </p>
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
      <ProjectContent projects={projects} isGrid={isGrid} />
    </div>
  );
};

export default Projects;
