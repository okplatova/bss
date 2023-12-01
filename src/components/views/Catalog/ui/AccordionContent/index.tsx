import { FC } from "react";
import Image from "next/image";

import { IAccordionContentProps } from "../../types/accordionContent.interface";

import s from "./styles.module.sass";

import { EquipmentItem } from "@/components/common/EquipmentItem";
import { Skeleton } from "@/components/ui/Skeleton";
import { Title } from "@/components/ui/Title";

const AccordionContent: FC<any> = ({ accordion }) => {
  return (
    <div className={s.accordionContent}>
      {accordion.PICTURE ? (
        <div className={s.imageWrapper}>
          <Image
            src={`https://dev9.paradigma-digital.ru/${accordion.PICTURE}`}
            fill
            alt="accordion"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className={s.equipments}>
        {accordion.ITM
          ? Object.values(accordion.ITM).map((equipment) => (
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
            ))
          : null}
      </div>
      <div className={s.additionalEquipments}>
        <div className={s.additionalItem}>
          <Title variant="h4">Варианты подвеса экранов</Title>
          <div className={s.additionalEquipmentsList}>
            {accordion.ITM
              ? Object.values(accordion.ITM).map((equipment) => (
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
                ))
              : null}
          </div>
        </div>
        <div className={s.additionalItem}>
          <Title variant="h4">Варианты подвеса экранов</Title>
          <div className={s.additionalEquipmentsList}>
            {accordion.ITM
              ? Object.values(accordion.ITM).map((equipment) => (
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
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionContent;
