import { useEffect, useState } from "react";
import Link from "next/link";
import { useInView } from "react-hook-inview";

import { equipmentList } from "../../data/equipmentsList";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import EquipmentItem from "../EquipmentItem";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { useGetMainEquipment } from "@/shared/hooks";

const EquipmentSection = () => {
  const [isView, setView] = useState(false);
  const [ref, inView] = useInView();

  const { equipments, isLoading } = useGetMainEquipment();

  const equipmentListClass = `${s.equipmentList} ${isView ? s.isView : ""}`;

  useEffect(() => {
    if (inView) setView(true);
  }, [inView]);

  return (
    <section className={`${s.section} `}>
      <div className="container">
        <div className={s.top}>
          <SectionTitle label="Оборудование" color="black" />
          <Link href="/catalog" className={s.link}>
            <span>Смотреть все</span>
            <ArrowRightIcon />
          </Link>
        </div>
        <div ref={ref} className={equipmentListClass}>
          {equipments && (
            <>
              {Object.values(equipments).map((equipment: any, index) => {
                let delay;
                if (isView) {
                  delay = (index + 1) * 150;
                }
                return (
                  <EquipmentItem
                    key={equipment.ID}
                    title={equipment.NAME}
                    img={equipment.PICTURE}
                    customStyles={{
                      transition: `opacity 500ms ease ${delay}ms, background 500ms ease`,
                    }}
                    className={s.equipmentItem}
                  />
                );
              })}
            </>
          )}
          {/* {equipmentList.map((equipment, index) => {
            let delay;
            if (isView) {
              delay = (index + 1) * 150;
            }
            return (
              <EquipmentItem
                key={equipment.id}
                title={equipment.title}
                img={equipment.img}
                customStyles={{
                  transition: `opacity 500ms ease ${delay}ms, background 500ms ease`,
                }}
                className={s.equipmentItem}
              />
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
