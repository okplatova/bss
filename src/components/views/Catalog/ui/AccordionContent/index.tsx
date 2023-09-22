import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { IAccordionContentProps } from "../../types/accordionContent.interface";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { EquipmentItem } from "@/components/common/EquipmentItem";

const AccordionContent: FC<IAccordionContentProps> = ({ accordion }) => {
  return (
    <div className={s.accordionContent}>
      <div className={s.imageWrapper}>
        <Image src={accordion.img.src} fill alt="accordion" loading="lazy" />
      </div>

      <div className={s.equipments}>
        {accordion.equipments.map((equipment) => (
          <EquipmentItem
            key={equipment.id}
            title={equipment.title}
            type={equipment.type}
            options={equipment.options}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionContent;
