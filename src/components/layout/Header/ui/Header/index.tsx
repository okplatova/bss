import NavItem from "../NavItem";
import s from "./styles.module.sass";
import { LogoIcon } from "@/components/ui/LogoIcon";

const Header = () => {
  return (
    <header className={s.header}>
      <LogoIcon />
      <div className={s.headerContent}>
        <div className={s.top}>
          <NavItem label="infi@bss-tv.com" isMail />
          <NavItem label="+7 (900) 845-14-41" isPhone />
          <NavItem label="+7 (903) 796-24-14" isPhone />
        </div>
        <div className={s.bottom}>
          <NavItem label="Проекты" />
          <NavItem label="Оборудование" />
          <NavItem label="Видеостудия" />
          <NavItem label="Контакты" />
          <NavItem label="Видеопроекционные комплексы" />
        </div>
      </div>
    </header>
  );
};

export default Header;
