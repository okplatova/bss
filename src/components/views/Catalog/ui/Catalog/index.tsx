import { useEffect, useState } from "react";

import { catalogList } from "../../data/catalogList";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import AccordionContent from "../AccordionContent";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

const breadcrumbs = [
  {
    label: "Главная",
    link: "/",
  },
  {
    label: "Оборудование",
  },
];

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
      <Breadcrumbs items={breadcrumbs} />

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
                variable="clear"
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
              count={accordion.equipments.length}
            >
              <AccordionContent accordion={accordion} />
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
