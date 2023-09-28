import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { useStores } from "@/shared/context";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/CloseIcon";
import { Input } from "@/components/ui/Input";

const Calculator = () => {
  const { calculator } = useStores();

  const handleOpentMenu = () => {
    calculator.handleOpenMenu();
  };

  useEffect(() => {
    if (calculator.menuIsOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [calculator.menuIsOpen]);

  const menuClass = `${s.menu} ${calculator.menuIsOpen ? s.active : ""}`;

  return (
    <div className={menuClass} onClick={handleOpentMenu}>
      <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={s.top}>
          <Title variant="h3" className={s.title}>
            P3
          </Title>
          <Button
            className={s.closebtn}
            onClick={handleOpentMenu}
            size="medium"
            variable="clear"
            ariaLabel="close"
          >
            <CloseIcon />
          </Button>
        </div>
        <div className={s.content}>
          <div className={s.quantityCalc}>
            <span className={s.sectionTitle}>количество модулей</span>
            <div className={s.inputs}>
              <div className={s.inputWrapper}>
                <span>В ширину</span>
                <Input />
              </div>
              <div className={s.inputWrapper}>
                <span>В высоту</span>
                <Input />
              </div>
            </div>
          </div>
          <div className={s.mainContent}>
            <div className={s.section}>
              <span className={s.preSectionTitle}>размеры</span>
              <div className={s.sectionItems}>
                <div className={s.sectionItem}>
                  <span>ширина</span>
                  <div className={s.separator} />
                  <span>0.500 метров</span>
                </div>
                <div className={s.sectionItem}>
                  <span>Высота</span>
                  <div className={s.separator} />
                  <span>0.500 метров</span>
                </div>
              </div>
            </div>
            <div className={s.section}>
              <span className={s.preSectionTitle}>Разрешение</span>
              <div className={s.sectionItems}>
                <div className={s.sectionItem}>
                  <span>ширина</span>
                  <div className={s.separator} />
                  <span>210 px</span>
                </div>
                <div className={s.sectionItem}>
                  <span>Высота</span>
                  <div className={s.separator} />
                  <span>210 px</span>
                </div>
              </div>
            </div>
            <div className={s.section}>
              <span className={s.preSectionTitle}>Количество модулей</span>
              <div className={s.sectionItems}>
                <div className={s.sectionItem}>
                  <span>ширина</span>
                  <div className={s.separator} />
                  <span>1 шт</span>
                </div>
              </div>
            </div>
            <div className={s.section}>
              <span className={s.preSectionTitle}>Площадь экрана</span>
              <div className={s.sectionItems}>
                <div className={s.sectionItem}>
                  <span>ширина</span>
                  <div className={s.separator} />
                  <span>1 шт</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Calculator);
