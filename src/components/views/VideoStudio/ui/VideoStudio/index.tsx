import s from "./styles.module.sass";
import he from "he";

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
          {videostudion
            ? //@ts-ignore
              he.decode(videostudion[0].CONTENT["О студии"].TEXT)
            : ""}
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
