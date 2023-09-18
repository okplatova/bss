import { FC } from "react";
import Link from "next/link";

import { IEquipmentItemProps } from "../types/equipmentItem.interface";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";

const EquipmentItem: FC<IEquipmentItemProps> = ({ title, type, options }) => {
  return (
    <Link href="/product/product-item" className={s.equipment}>
      <p>{title}</p>
      <Title variant="h6">{type}</Title>
      <div className={s.options}>
        {options.map((option) => (
          <div key={option} className={s.option}>
            {option}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default EquipmentItem;
