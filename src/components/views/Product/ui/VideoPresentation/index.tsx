import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import CertificateItem from "../CertificateItem";
import { FC } from "react";
import { Skeleton } from "@/components/ui/Skeleton";
import { Player } from "@/components/common/Player";

const VideoPresentation: FC<any> = ({ video }) => {
  return (
    <div className={s.videoPresentation}>
      <SectionTitle label="Видеопрезентация" />
      <div className={s.video}>
          <Player url={video}/>
      </div>
    </div>
  );
};

export default VideoPresentation;
