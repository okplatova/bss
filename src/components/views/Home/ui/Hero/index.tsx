import { useEffect, useState } from "react";
import { useInView } from "react-hook-inview";

import s from "./styles.module.sass";

const Hero = () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className={`${s.hero} ${isActive ? s.isView : ""}`}>
      <h1 className="container">
        <span>Big</span>
        <div className={s.square} />
        <span>Screen</span>
        <div className={s.square} />
        <span>Show</span>
      </h1>
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

          <img src="/video.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
