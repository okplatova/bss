import { useEffect } from "react";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import Link from "next/link";

import { useStores } from "@/shared/context";
import s from "./styles.module.sass";

import { LogoIcon } from "@/components/ui/LogoIcon";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/CloseIcon";

const Menu = () => {
  const { menu } = useStores();
  const router = useRouter();
  const handleOpentMenu = () => {
    menu.handleOpenMenu();
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
      handleOpentMenu();
    }
  }, [router.pathname]);

  const menuClass = `${s.menu} ${menu.menuIsOpen ? s.active : ""}`;

  return (
    <div className={menuClass} onClick={handleOpentMenu}>
      <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={s.top}>
          <Link href="/">
            <LogoIcon className={s.logo} />
          </Link>
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
        <div className={s.center}>
          <Link href="/projects">Проекты</Link>
          <Link href="/catalog">Оборудование</Link>
          <Link href="/contacts">Контакты</Link>
          <Link href="/video-studio">Видеостудия</Link>
          <Link href="/video-projection">Видеопроекционные комплексы</Link>
        </div>
        <div className={s.bottom}>
          <a href="maito:infi@bss-tv.com">infi@bss-tv.com</a>
          <a href="tel:+7 (900) 845-14-41">+7 (900) 845-14-41</a>
          <a href="tel:+7 (903) 796-24-14">+7 (903) 796-24-14</a>
        </div>
      </div>
    </div>
  );
};

export default observer(Menu);
