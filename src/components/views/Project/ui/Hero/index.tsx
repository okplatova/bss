import Image from "next/image";
import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={`${s.top} container`}>
        <Title variant="h2" className={s.title}>
          День Флага Российской Федерации
        </Title>
        <div className={s.imageWrapper}>
          <Image src="/project-hero.jpg" fill alt="hero" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
