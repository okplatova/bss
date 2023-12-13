import { FC, useEffect, useState } from "react";

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

const Catalog: FC<any> = ({ products }) => {
  const { catalog } = useStores();

  const [selectedAccordion, setSelectedAccordion] = useState<number>(0);
  const [selectedCatalog, setSelectedCatalog] = useState<string>(
    catalog.currentCatalogItem.title
      ? catalog.currentCatalogItem.title
      : products[0].NAME
  );

  const { product, isLoading } = useGetProduct();

  const toggleAccordion = (index: number) => {
    setSelectedAccordion(index);
  };

  const toggleCatalog = (title: string) => {
    setSelectedCatalog(title);
  };

  useEffect(() => {
    toggleAccordion(0);
  }, [selectedCatalog]);

  // useEffect(() => {
  //   setSelectedCatalog(products[0].NAME);
  //   catalog.setCatalogItem({
  //     id: 0,
  //     title: products[0].NAME,
  //     count: 0,
  //   });
  // }, [catalog, products]);

  const handleOpenMenu = () => {
    catalog.handleOpenMenu();
  };

  const filteredProduct =
    products &&
    //@ts-ignore
    products.filter((item) => {
      return item.NAME === selectedCatalog;
    });

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
            products?.map((catalogItem, index) => {
              const buttonClass = `${s.catalogBtn} ${
                selectedCatalog === catalogItem.NAME ? s.active : ""
              }`;

              const children = 1;
              //@ts-ignore
              let totalChild = [];

              catalogItem.CHILD &&
                Object.values(catalogItem.CHILD).forEach((child) => {
                  //@ts-ignore
                  if (child.CHILD) {
                    //@ts-ignore
                    Object.values(child.CHILD).forEach((item) => {
                      //@ts-ignore
                      totalChild = [...totalChild, ...Object.values(item.ITM)];
                    });
                  }
                  //@ts-ignore
                  if (!child.ITM) {
                    return;
                  }
                  //@ts-ignore
                  if (child.ITM === Array) {
                    //@ts-ignore
                    totalChild = [...totalChild, ...child.ITM];
                    //@ts-ignore
                  } else {
                    //@ts-ignore
                    totalChild = [...totalChild, ...Object.values(child.ITM)];
                  }
                });

              return (
                <>
                  {totalChild.length ? (
                    <Button
                      key={catalogItem.ID}
                      count={totalChild.length}
                      size="medium"
                      variable="clear"
                      className={buttonClass}
                      onClick={() => toggleCatalog(catalogItem.NAME)}
                      ariaLabel="product"
                    >
                      {catalogItem.NAME}
                    </Button>
                  ) : null}
                </>
              );
            })
          }
        </div>
        <div className={s.info}>
          {!isLoading &&
            //@ts-ignore
            filteredProduct[0].CHILD &&
            //@ts-ignore
            Object.values(filteredProduct[0].CHILD).map((accordion, index) => {
              //@ts-ignore
              const innerContent = accordion.CHILD;
              //@ts-ignore
              let totalChild = [];
              //@ts-ignore
              if (accordion.CHILD) {
                //@ts-ignore
                Object.values(accordion.CHILD).forEach((item) => {
                  //@ts-ignore
                  totalChild = [...totalChild, ...Object.values(item.ITM)];
                });
              }
              //@ts-ignore
              if (!accordion.ITM) {
                return;
              }
              //@ts-ignore
              if (accordion.ITM === Array) {
                //@ts-ignore
                totalChild = [...totalChild, ...accordion.ITM];
                //@ts-ignore
              } else {
                //@ts-ignore
                totalChild = [...totalChild, ...Object.values(accordion.ITM)];
              }

              return (
                <Accordion
                  //@ts-ignore
                  key={accordion.ID}
                  isShow={selectedAccordion === index}
                  //@ts-ignore
                  title={accordion.NAME}
                  onClick={() => toggleAccordion(index)}
                  count={totalChild.length}
                >
                  <AccordionContent
                    accordion={accordion}
                    child={
                      //@ts-ignore
                      innerContent ? Object.values(innerContent) : null
                    }
                  />
                </Accordion>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default observer(Catalog);
