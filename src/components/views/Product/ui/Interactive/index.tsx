import Image from "next/image";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";

const Interactive = () => {
  return (
    <div className={s.interactive}>
      <SectionTitle label="интерактивный эффект" />
      <p>
        Отсутсвие задержки интерактивного эффекта обеспечивает сильное
        воздействие, удивительные и незабываемые впечатления зрителей
      </p>
      <div className={s.imageWrapper}>
        <Image src="/interactive.jpg" fill alt="interactive" />
      </div>
    </div>
  );
};

export default Interactive;
