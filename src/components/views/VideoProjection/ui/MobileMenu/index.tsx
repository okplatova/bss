import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { IModalMenuProps } from "../../types/mobileMenu.interface";

import { useStores } from "@/shared/context";
import { catalogList } from "../../data/catalogList";

import s from "./styles.module.sass";

import { Button } from "@/components/ui/Button";

const MobileMenu: FC<any> = ({ complexes, toggleComplex }) => {
  const { projection } = useStores();

  const handleOpenMenu = () => {
    projection.handleOpenMenu();
  };
  const handleSelectItem = (item: any, index: number) => {
    projection.setCatalogItem(item);
    projection.handleOpenMenu();
    toggleComplex(item.title);
  };

  useEffect(() => {
    if (projection.menuIsOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [projection.menuIsOpen]);

  const menuClass = `${s.menu} ${projection.menuIsOpen ? s.active : ""}`;

  return (
    <div className={menuClass} onClick={handleOpenMenu}>
      <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={s.separatorWrapper}>
          <div className={s.separator} />
        </div>
        {complexes.map((item: any, index: number) => {
          const currentCatalogItem = {
            id: item.id,
            title: item.NAME,
            count: 0,
          };
          const btnClass = `${s.btn} ${
            item.NAME === projection.currentCatalogItem.title ? s.active : ""
          }`;
          return (
            <Button
              key={item.NAME}
              size="medium"
              variable="clear"
              className={btnClass}
              onClick={() => handleSelectItem(currentCatalogItem, index)}
              ariaLabel="product"
            >
              {item.NAME}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default observer(MobileMenu);
