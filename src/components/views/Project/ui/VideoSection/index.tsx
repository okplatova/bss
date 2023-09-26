import s from "./styles.module.sass";

import { Player } from "@/components/common/Player";
import { SectionTitle } from "@/components/ui/SectionTitle";

const VideoSection = () => {
  return (
    <div className={s.section}>
      <SectionTitle label="Видео" />
      <Player url="https://vimeo.com/842048913" />
    </div>
  );
};

export default VideoSection;
