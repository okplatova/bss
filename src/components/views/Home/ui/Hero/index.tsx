import { useEffect, useState } from "react";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Player } from "@/components/common/Player";
import { useGetMainEquipment, useGetMainVideo } from "@/shared/hooks";

const Hero = () => {
  const [isActive, setActive] = useState(false);
  const { equipments, isLoading } = useGetMainEquipment();
  const { video } = useGetMainVideo();
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
          КОМПЛЕКСНОЕ ОБЕСПЕЧЕНИЕ МАССОВЫХ МЕРОПРИЯТИЙ, ШОУ-ПРОГРАММ И ВЫСТАВОК
          ПРОФЕССИОНАЛЬНЫМИ СИСТЕМАМИ ОТОБРАЖЕНИЯ ИНФОРМАЦИИ
        </span>
        <p>
          Российская компания «Биг Скрин Шоу» известна как надежный и
          качественный производитель продукции и услуг в сфере технического
          обеспечения, а так же художественного оформления всевозможных шоу,
          концертов, спортивных и других массовых зрелищных мероприятий.
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
