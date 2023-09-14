import Link from "next/link";

import { equipmentList } from "../../data/equipmentsList";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import EquipmentItem from "../EquipmentItem";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";

const EquipmentSection = () => {
  return (
    <section className={`${s.section} `}>
      <div className="container">
        <div className={s.top}>
          <SectionTitle label="Оборудование" color="black" />
          <Link href="/" className={s.link}>
            <span>Смотреть все</span>
            <ArrowRightIcon />
          </Link>
        </div>
        <div className={s.equipmentList}>
          {equipmentList.map((equipment) => (
            <EquipmentItem
              key={equipment.id}
              title={equipment.title}
              img={equipment.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
