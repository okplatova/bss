import { useEffect, useState } from "react";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Player } from "@/components/common/Player";
import {
  useGetMainEquipment,
  useGetMainVideo,
  useGetMain,
} from "@/shared/hooks";

const Hero = () => {
  const [isActive, setActive] = useState(false);
  const { equipments, isLoading } = useGetMainEquipment();
  const { video } = useGetMainVideo();
  const { main } = useGetMain();
  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className={`${s.hero} ${isActive ? s.isView : ""}`}>
      <Title variant="h1" className="container">
        <span>Big</span>
        <div className={s.square} />
        <span>Screen</span>
        <div className={s.square} />
        <span>Show</span>
      </Title>
      <div className={`${s.heroContent} container`}>
        <span>
          {
            //@ts-ignore
            main?.SUBTITLE
          }
        </span>
        <p>
          {
            //@ts-ignore
            main?.TEXT
          }
        </p>
      </div>
      <div className={s.video}>
        <div className={s.videoWrapper}>
          <div className={s.backdrop} />
          <Player
            controls={false}
            url={video}
            muted
            playing
            loop
            light={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
