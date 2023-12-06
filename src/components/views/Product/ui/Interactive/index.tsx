import Image from "next/image";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { FC } from "react";

const Interactive: FC<any> = ({ image, text }) => {
  console.log("====================================");
  console.log("image", image);
  console.log("====================================");
  return (
    <div className={s.interactive}>
      <SectionTitle label="интерактивный эффект" />
      {text ? (
        <p>
          Отсутсвие задержки интерактивного эффекта обеспечивает сильное
          воздействие, удивительные и незабываемые впечатления зрителей
        </p>
      ) : null}
      {image ? (
        <div className={s.imageWrapper}>
          <Image
            src={`https://dev9.paradigma-digital.ru/${image}`}
            fill
            alt="interactive"
            loading="lazy"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Interactive;
