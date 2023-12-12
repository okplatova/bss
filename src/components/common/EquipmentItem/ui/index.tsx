import { FC } from "react";
import Link from "next/link";

import { IEquipmentItemProps } from "../types/equipmentItem.interface";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";

const EquipmentItem: FC<IEquipmentItemProps> = ({
  title,
  type,
  options,
  variant = "black",
  option1,
  option2,
  option3,
}) => {
  console.log("title", title);

  const equipmentClass = `${s.equipment} ${s[variant]}`;
  return (
    <Link
      href={`/product/${type?.split(" ").join("-").toLowerCase()}`}
      className={equipmentClass}
    >
      <p>{title}</p>
      <Title variant="h6">{type}</Title>
      <div className={s.options}>
        {/* {options.map((option) => (
          <div key={option} className={s.option}>
            {option}
          </div>
        ))} */}
        <div className={s.option}>{option1}</div>
        <div className={s.option}>{option2}</div>
        <div className={s.option}>{option3}</div>
      </div>
    </Link>
  );
};

export default EquipmentItem;
