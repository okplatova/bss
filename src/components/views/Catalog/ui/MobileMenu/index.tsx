import { FC } from "react";
import { observer } from "mobx-react-lite";

import { IModalMenuProps } from "../../types/mobileMenu.interface";

import { useStores } from "@/shared/context";
import { catalogList } from "../../data/catalogList";

import s from "./styles.module.sass";

import { Button } from "@/components/ui/Button";

const MobileMenu: FC<IModalMenuProps> = ({ toggleCatalog }) => {
  const { catalog } = useStores();

  const handleOpenMenu = () => {
    catalog.handleOpenMenu();
  };
  const handleSelectItem = (item: any, index: number) => {
    catalog.setCatalogItem(item);
    catalog.handleOpenMenu();
    toggleCatalog(index);
  };

  const menuClass = `${s.menu} ${catalog.menuIsOpen ? s.active : ""}`;

  return (
    <div className={menuClass} onClick={handleOpenMenu}>
      <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={s.separatorWrapper}>
          <div className={s.separator} />
        </div>
        {catalogList.map((catalogItem, index) => {
          const currentCatalogItem = {
            id: catalogItem.id,
            title: catalogItem.title,
            count: catalogItem.count,
          };
          const btnClass = `${s.btn} ${
            catalogItem.id === catalog.currentCatalogItem.id ? s.active : ""
          }`;
          return (
            <Button
              key={catalogItem.id}
              count={catalogItem.content.length}
              size="medium"
              variable="clear"
              className={btnClass}
              onClick={() => handleSelectItem(currentCatalogItem, index)}
              ariaLabel="product"
            >
              {catalogItem.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default observer(MobileMenu);
