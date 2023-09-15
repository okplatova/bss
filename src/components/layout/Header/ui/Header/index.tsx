import NavItem from "../NavItem";
import s from "./styles.module.sass";
import { LogoIcon } from "@/components/ui/LogoIcon";
import Link from "next/link";
const Header = () => {
  return (
    <header className={s.header}>
      <Link href="/" className={s.logo}>
        <LogoIcon />
      </Link>
      <div className={s.headerContent}>
        <div className={s.top}>
          <NavItem link="#" label="infi@bss-tv.com" isMail />
          <NavItem link="#" label="+7 (900) 845-14-41" isPhone />
          <NavItem link="#" label="+7 (903) 796-24-14" isPhone />
        </div>
        <div className={s.bottom}>
          <NavItem link="#" label="Проекты" />
          <NavItem link="/catalog" label="Оборудование" />
          <NavItem link="#" label="Видеостудия" />
          <NavItem link="#" label="Контакты" />
          <NavItem link="#" label="Видеопроекционные комплексы" />
        </div>
      </div>
    </header>
  );
};

export default Header;
