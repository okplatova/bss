import { FC } from "react";
import s from "./styles.module.sass";

import { Player } from "@/components/common/Player";
import { SectionTitle } from "@/components/ui/SectionTitle";

const VideoSection: FC<any> = ({ video }) => {
  return (
    <div className={s.section}>
      <SectionTitle label="Видео" />
      <Player url={video} />
    </div>
  );
};

export default VideoSection;
