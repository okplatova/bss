import { useEffect, useState } from "react";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Player } from "@/components/common/Player";

const Hero = () => {
  const [isActive, setActive] = useState(false);

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
        <p>
          Команда талантливых профессионалов, создающих взрывные впечатления для
          мероприятия любого уровня и масштаба. Делаем большое сильное шоу с
          акцентом на главную идею.
        </p>
      </div>
      <div className={s.video}>
        <div className={s.videoWrapper}>
          <div className={s.backdrop} />
          <Player url="https://vimeo.com/842048913" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
