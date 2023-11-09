import { useEffect, useState } from "react";

import { catalogList } from "../../data/catalogList";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import AccordionContent from "../AccordionContent";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import MobileMenu from "../MobileMenu";
import { observer } from "mobx-react-lite";
import { useStores } from "@/shared/context";
import { OutlineArrowRight } from "@/components/ui/OutlineArrowRight";
import { useGetProduct } from "@/shared/hooks";

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
  const [selectedAccordion, setSelectedAccordion] = useState<number>(0);
  const [selectedCatalog, setSelectedCatalog] = useState<number>(0);

  const { catalog } = useStores();

  const { product, isLoading } = useGetProduct();

  const toggleAccordion = (index: number) => {
    setSelectedAccordion(index);
  };

  const toggleCatalog = (index: number) => {
    setSelectedCatalog(index);
  };

  useEffect(() => {
    toggleAccordion(0);
  }, [selectedCatalog]);

  const handleOpenMenu = () => {
    catalog.handleOpenMenu();
  };

  return (
    <div className={s.catalog}>
      <Breadcrumbs items={breadcrumbs} className={s.bread} />
      <div className={s.top}>
        <Title variant="h1" className={`${s.title} container`}>
          оборудование
        </Title>
      </div>
      <div className={s.catalogContent}>
        <MobileMenu toggleCatalog={setSelectedCatalog} />
        <div className={s.modalBtnWrapper}>
          <Button
            onClick={handleOpenMenu}
            size="medium"
            variable="clear"
            ariaLabel="open-modal"
          >
            <span>{catalog.currentCatalogItem.title}</span>
            <OutlineArrowRight />
          </Button>
        </div>
        <div className={s.catalogList}>
          {
            //@ts-ignore
            product?.map((catalogItem, index) => {
              const buttonClass = `${s.catalogBtn} ${
                selectedCatalog === index ? s.active : ""
              }`;
              const children = Object.values(catalogItem.CHILD);
              return (
                <Button
                  key={catalogItem.ID}
                  count={children.length}
                  size="medium"
                  variable="clear"
                  className={buttonClass}
                  onClick={() => toggleCatalog(index)}
                  ariaLabel="product"
                >
                  {catalogItem.NAME}
                </Button>
              );
            })
          }
        </div>
        <div className={s.info}>
          {!isLoading &&
            //@ts-ignore
            Object.values(product[selectedCatalog]?.CHILD).map(
              (accordion, index) => (
                <Accordion
                  //@ts-ignore
                  key={accordion.ID}
                  isShow={selectedAccordion === index}
                  //@ts-ignore
                  title={accordion.NAME}
                  onClick={() => toggleAccordion(index)}
                  //@ts-ignore
                  count={Object.values(accordion.ITM).length}
                >
                  <AccordionContent accordion={accordion} />
                </Accordion>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default observer(Catalog);
