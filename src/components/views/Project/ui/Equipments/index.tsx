import { equipmentsList } from "../../data/equipmentsList";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { EquipmentItem } from "@/components/common/EquipmentItem";

const Equipments = () => {
  return (
    <div className={s.equipments}>
      <SectionTitle label="Оборудование" />
      <div className={s.equipmentsList}>
        {equipmentsList.map((equipment) => (
          //@ts-ignore
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

export default Equipments;
