import { FC } from "react";
import Image from "next/image";

import { IEquipmentItemProps } from "../../types/equipmentItem.interface";

import s from "./styles.module.sass";

import { PlusIcon } from "@/components/ui/PlusIcon";
import { Button } from "@/components/ui/Button";

const EquipmentItem: FC<IEquipmentItemProps> = ({ title, img }) => {
  return (
    <div className={s.equipmentItem}>
      <h6 className={s.title}>{title}</h6>
      <div className={s.imageWrapper}>
        <Image src={img.src} alt={title} fill />
      </div>
      <div className={s.btnWrapper}>
        <Button className={s.addBtn} size="small" variable="rounded">
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default EquipmentItem;
