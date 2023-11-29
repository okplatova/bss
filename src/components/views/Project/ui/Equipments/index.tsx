import { equipmentsList } from "../../data/equipmentsList";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { EquipmentItem } from "@/components/common/EquipmentItem";
import { FC } from "react";

const Equipments: FC<any> = ({ equipmentsList }) => {
  console.log("equipment", equipmentsList);

  return (
    <div className={s.equipments}>
      <SectionTitle label="Оборудование" />
      <div className={s.equipmentsList}>
        {equipmentsList.map((equipment: any) => (
          //@ts-ignore
          <EquipmentItem
            key={equipment.id}
            title={equipment.NAME}
            type={equipment.TITLE}
            // options={equipment.options}
          />
        ))}
      </div>
    </div>
  );
};

export default Equipments;
