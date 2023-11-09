import { FC } from "react";
import Image from "next/image";

import { IAccordionContentProps } from "../../types/accordionContent.interface";

import s from "./styles.module.sass";

import { EquipmentItem } from "@/components/common/EquipmentItem";
import { Skeleton } from "@/components/ui/Skeleton";

const AccordionContent: FC<any> = ({ accordion }) => {
  return (
    <div className={s.accordionContent}>
      <div className={s.imageWrapper}>
        {accordion.PICTURE ? (
          <Image
            src={`https://dev9.paradigma-digital.ru/${accordion.PICTURE}`}
            fill
            alt="accordion"
            loading="lazy"
          />
        ) : (
          <Skeleton className={s.imageSkeleton} />
        )}
      </div>

      <div className={s.equipments}>
        {Object.values(accordion.ITM).map((equipment) => (
          <EquipmentItem
            //@ts-ignore
            key={equipment.ID}
            // title={equipment.CONTENT["Заголовок"]}
            //@ts-ignore
            type={equipment.CONTENT["Заголовок"]}
            //@ts-ignore
            option1={equipment.CONTENT["Свойства для Анонса 1"]}
            //@ts-ignore
            option2={equipment.CONTENT["Свойства для Анонса 2"]}
            //@ts-ignore
            option3={equipment.CONTENT["Свойства для Анонса 3"]}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionContent;
