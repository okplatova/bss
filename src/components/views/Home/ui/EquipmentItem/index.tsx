import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { IEquipmentItemProps } from "../../types/equipmentItem.interface";

import s from "./styles.module.sass";

import { PlusIcon } from "@/components/ui/PlusIcon";
import { Button } from "@/components/ui/Button";

const EquipmentItem: FC<IEquipmentItemProps> = ({
  title,
  img,
  className,
  customStyles,
}) => {
  return (
    <Link
      href={"/product/product-item"}
      style={{ ...customStyles }}
      className={`${s.equipmentItem} ${className}`}
    >
      <h6 className={s.title}>{title}</h6>
      <div className={s.imageWrapper}>
        <Image src={img.src} alt={title} fill />
      </div>
      <div className={s.btnWrapper}>
        <Button className={s.addBtn} size="small" variable="rounded">
          <PlusIcon />
        </Button>
      </div>
    </Link>
  );
};

export default EquipmentItem;
