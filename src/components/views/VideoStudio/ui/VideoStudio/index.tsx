import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Player } from "@/components/common/Player";
import AboutSection from "../AboutSection";
import PhotoSwiperSection from "../PhotoSwiperSection";
import ProjectsSection from "../ProjectsSection";
import { useGetVideostudio } from "@/shared/hooks/useGetVideostudio";
import { Skeleton } from "@/components/ui/Skeleton";

const VideoStudio = () => {
  const { videostudion, isLoading } = useGetVideostudio();
  console.log("videostudion", videostudion);
  const breadcrumbs = [
    {
      label: "Главная",
      link: "/",
    },
    {
      //@ts-ignore
      label: videostudion?.NAME,
    },
  ];

  return (
    <div className={s.videoStudio}>
      <Breadcrumbs items={breadcrumbs} />
      <div className={`${s.top} container`}>
        <Title variant="h1" className={s.title}>
          {
            //@ts-ignore
            videostudion?.NAME
          }
        </Title>

        <p className={s.description}>
          {
            //@ts-ignore
            videostudion?.CONTENT["Текст на Первом блоке"]
          }
        </p>
      </div>
      <div className={s.content}>
        <Player
          url={
            //@ts-ignore
            videostudion?.CONTENT["Видео Ссылка"]
          }
        />
        <AboutSection />
        <PhotoSwiperSection />
        <ProjectsSection />
      </div>
    </div>
  );
};

export default VideoStudio;
