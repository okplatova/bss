import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Player } from "@/components/common/Player";
import AboutSection from "../AboutSection";
import PhotoSwiperSection from "../PhotoSwiperSection";
import ProjectsSection from "../ProjectsSection";
import { useGetVideostudio } from "@/shared/hooks";
import { Skeleton } from "@/components/ui/Skeleton";

const VideoStudio = () => {
  const { videostudion, isLoading } = useGetVideostudio();
  const breadcrumbs = [
    {
      label: "Главная",
      link: "/",
    },
    {
      //@ts-ignore
      label: "Видеостудия",
    },
  ];

  return (
    <div className={s.videoStudio}>
      <Breadcrumbs items={breadcrumbs} />
      <div className={`${s.top} container`}>
        <Title variant="h1" className={s.title}>
          Видеостудия
        </Title>
        <p className={s.description}>
          В 2013 году в компании создана видеостудия. Многолетний опыт работы с
          системами отображения информации и прекрасное знание принципов работы
          серверов, воспроизводящих контент, позволяет создавать образы,
          способные сделать ваши шоу незабываемыми.
          <br />
          Видеостудия специализируется на создании видеоконтента для музыкальных
          шоу и концертных программ. Самыми значимыми для нас проектами является
          работа на проектах «Голос», «Голос дети», «Голос 60+». Оформление
          музыкальных номеров для церемонии вручения наград Русского радио
          «Золотой Граммофон». Телевизионного проекта «Фантастика».
        </p>
      </div>
      <div className={s.content}>
        {videostudion ? (
          <Player
            controls={false}
            muted
            playing
            loop
            light={false}
            url="https://vimeo.com/869155664"
          />
        ) : null}

        {/* <AboutSection />
        <PhotoSwiperSection /> */}
        <ProjectsSection />
      </div>
    </div>
  );
};

export default VideoStudio;
