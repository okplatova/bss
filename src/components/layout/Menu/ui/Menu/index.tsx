import { useEffect } from "react";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import Link from "next/link";

import { useStores } from "@/shared/context";
import s from "./styles.module.sass";

import { LogoIcon } from "@/components/ui/LogoIcon";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/CloseIcon";
import Equipments from "../Equipments";

const Menu = () => {
  const { menu, equipmentMenu } = useStores();
  const router = useRouter();

  const handleOpenEquipmentsMenu = () => {
    equipmentMenu.handleOpenMainMenu(true);
  };

  const handleOpenMenu = () => {
    if (equipmentMenu.mainMenuIsOpen) {
      equipmentMenu.handleOpenMainMenu(false);
      equipmentMenu.handleOpenSecondMenu(false);
      equipmentMenu.handleOpenThirdMenu(false);
    }
    menu.handleOpenMenu();
  };

  const handleChangePage = (link: string) => {
    router.push(link);
    if (link === router.pathname) {
      handleOpenMenu();
    }
  };

  useEffect(() => {
    if (menu.menuIsOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [menu.menuIsOpen]);

  useEffect(() => {
    if (menu.menuIsOpen) {
      handleOpenMenu();
    }
  }, [router.pathname]);

  const menuClass = `${s.menu} ${menu.menuIsOpen ? s.active : ""}`;

  return (
    <div className={menuClass} onClick={handleOpenMenu}>
      <Equipments />
      <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={s.top}>
          <Link href="/">
            <LogoIcon className={s.logo} />
          </Link>
          <Button
            className={s.closebtn}
            onClick={handleOpenMenu}
            size="medium"
            variable="clear"
            ariaLabel="close"
          >
            <CloseIcon />
          </Button>
        </div>
        <div className={s.center}>
          <Button
            onClick={() => handleChangePage("/projects")}
            size="medium"
            ariaLabel="link"
            variable="clear"
          >
            Проекты
          </Button>
          <Button
            onClick={handleOpenEquipmentsMenu}
            size="medium"
            ariaLabel="link"
            variable="clear"
          >
            Оборудование
          </Button>
          <Button
            onClick={() => handleChangePage("/contacts")}
            size="medium"
            ariaLabel="link"
            variable="clear"
          >
            Контакты
          </Button>
          <Button
            onClick={() => handleChangePage("/video-studio")}
            size="medium"
            ariaLabel="link"
            variable="clear"
          >
            Видеостудия
          </Button>
          <Button
            onClick={() => handleChangePage("/video-projection")}
            size="medium"
            ariaLabel="link"
            variable="clear"
          >
            Видеопроекционные комплексы
          </Button>
        </div>
        <div className={s.bottom}>
          <a href="maito:info@bss-tv.com">info@bss-tv.com</a>
          <a href="tel:+7 (499) 136-24-44">+7 (499) 136-24-44</a>
          {/* <a href="tel:+7 (905) 509-72-72">+7 (905) 509-72-72</a> */}
        </div>
      </div>
    </div>
  );
};

export default observer(Menu);
