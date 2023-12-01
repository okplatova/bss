import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { IModalMenuProps } from "../../types/mobileMenu.interface";

import { useStores } from "@/shared/context";
import { catalogList } from "../../data/catalogList";

import s from "./styles.module.sass";

import { Button } from "@/components/ui/Button";
import { useGetProduct } from "@/shared/hooks";

const MobileMenu: FC<IModalMenuProps> = ({ toggleCatalog }) => {
  const { catalog } = useStores();
  const { product, isLoading } = useGetProduct();

  const handleOpenMenu = () => {
    catalog.handleOpenMenu();
  };
  const handleSelectItem = (item: any, index: number) => {
    catalog.setCatalogItem(item);
    catalog.handleOpenMenu();
    toggleCatalog(item.title);
  };

  useEffect(() => {
    if (catalog.menuIsOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [catalog.menuIsOpen]);

  const menuClass = `${s.menu} ${catalog.menuIsOpen ? s.active : ""}`;

  return (
    <div className={menuClass} onClick={handleOpenMenu}>
      <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={s.separatorWrapper}>
          <div className={s.separator} />
        </div>
        {
          //@ts-ignore
          product?.map((catalogItem, index) => {
            const children =
              catalogItem.CHILD && Object.values(catalogItem.CHILD);
            const currentCatalogItem = {
              id: catalogItem.ID,
              title: catalogItem.NAME,
              count: children ? children.length : 0,
            };
            const btnClass = `${s.btn} ${
              catalogItem.title === catalog.currentCatalogItem.title
                ? s.active
                : ""
            }`;
            return (
              <>
                {children ? (
                  <Button
                    key={catalogItem.id}
                    count={children ? children.length : 0}
                    size="medium"
                    variable="clear"
                    className={btnClass}
                    onClick={() => handleSelectItem(currentCatalogItem, index)}
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
    </div>
  );
};

export default observer(MobileMenu);
