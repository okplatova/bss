import { Title } from "@/components/ui/Title";
import s from "./styles.module.sass";
import { catalogList } from "../../data/catalogList";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { useEffect, useState } from "react";
import Image from "next/image";

const Catalog = () => {
  const [selectedAccordion, setSelectedAccordion] = useState<any>(0);
  const [selectedCatalog, setSelectedCatalog] = useState<any>(0);

  const toggleAccordion = (index: number) => {
    setSelectedAccordion(index);
  };

  const toggleCatalog = (index: number) => {
    setSelectedCatalog(index);
  };

  useEffect(() => {
    toggleAccordion(0);
  }, [selectedCatalog]);

  return (
    <div className={s.catalog}>
      <div className={s.top}>
        <Title variant="h2" className="container">
          оборудование
        </Title>
      </div>
      <div className={s.catalogContent}>
        <div className={s.catalogList}>
          {catalogList.map((catalogItem, index) => {
            const buttonClass = `${s.catalogBtn} ${
              selectedCatalog === index ? s.active : ""
            }`;
            return (
              <Button
                key={catalogItem.id}
                count={catalogItem.content.length}
                size="medium"
                className={buttonClass}
                onClick={() => toggleCatalog(index)}
              >
                {catalogItem.title}
              </Button>
            );
          })}
        </div>
        <div className={s.info}>
          {catalogList[selectedCatalog].content.map((accordion, index) => (
            <Accordion
              key={accordion.id}
              isShow={selectedAccordion === index}
              title={accordion.title}
              onClick={() => toggleAccordion(index)}
              item={accordion}
              count={accordion.equipments.length}
            >
              <div className={s.imageWrapper}>
                <Image src={accordion.img.src} fill alt={accordion.title} />
              </div>
              <div className={s.equipments}>
                {accordion.equipments.map((equipment) => (
                  <div key={equipment.id} className={s.equipment}>
                    <p>{equipment.title}</p>
                    <Title variant="h6">{equipment.type}</Title>
                    <div className={s.options}>
                      {equipment.options.map((option) => (
                        <div key={option} className={s.option}>
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
