import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { IEquipmentItemProps } from "../../types/equipmentItem.interface";

import s from "./styles.module.sass";

import { PlusIcon } from "@/components/ui/PlusIcon";
import { Button } from "@/components/ui/Button";
import { useStores } from "@/shared/context";
import { useRouter } from "next/router";

const EquipmentItem: FC<IEquipmentItemProps> = ({
  title,
  img,
  className,
  customStyles,
}) => {
  const { catalog } = useStores();

  const { push } = useRouter();
  const handlePush = () => {
    catalog.setCatalogItem({
      id: 0,
      title: title,
      count: 0,
    });
    push("/catalog");
  };
  return (
    <div
      onClick={handlePush}
      style={{ ...customStyles }}
      className={`${s.equipmentItem} ${className}`}
    >
      <h6 className={s.title}>{title}</h6>
      <div className={s.imageWrapper}>
        {
          img ? <Image src={`https://dev9.paradigma-digital.ru/${img}`} alt="Equipment" fill loading="lazy" /> : null
        }
        
      </div>
      <div className={s.btnWrapper}>
        <Button
          className={s.addBtn}
          size="small"
          variable="rounded"
          ariaLabel="transition"
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default EquipmentItem;
