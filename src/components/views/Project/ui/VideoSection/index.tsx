import { FC } from "react";
import s from "./styles.module.sass";

import { Player } from "@/components/common/Player";
import { SectionTitle } from "@/components/ui/SectionTitle";
import VideoSwiper from "../VideoSwiper";

const VideoSection: FC<any> = ({ video }) => {
  console.log("video", video);

  return (
    <div className={s.section}>
      <SectionTitle label="Видео" />
      {video.length > 1 ? (
        <VideoSwiper video={video} />
      ) : (
        <Player url={video} />
      )}
    </div>
  );
};

export default VideoSection;
