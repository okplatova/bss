import Image from "next/image";
import he from "he";
import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { FC } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

interface IHeroProps {
  title: string;
  img: string;
}

const Hero: FC<IHeroProps> = ({ title, img }) => {
  return (
    <div className={s.hero}>
      <div className={`${s.top} container`}>
        {title ? (
          <Title variant="h2" className={s.title}>
            {he.decode(title)}
          </Title>
        ) : (
          <Skeleton className={s.titleSkeleton} />
        )}

        <div className={s.imageWrapper}>
          {img ? (
            <Image
              src={`https://dev9.paradigma-digital.ru/${img}`}
              fill
              alt="hero"
              loading="lazy"
            />
          ) : (
            <Skeleton className={s.skeleton} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
