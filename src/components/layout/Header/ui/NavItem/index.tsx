import { FC } from "react";
import Link from "next/link";

import { INavItemProps } from "../../types/navItem.interface";

import s from "./styles.module.sass";

const NavItem: FC<INavItemProps> = ({
  label,
  isPhone = false,
  isMail = false,
  isLink = true,
  link,
}) => {
  if (isPhone) {
    return (
      <a href={`tel:${label}`} className={s.navItem}>
        {label}
      </a>
    );
  }
  if (isMail) {
    return (
      <a href={`mailto:${label}`} className={s.navItem}>
        {label}
      </a>
    );
  }
  if (isLink) {
    return (
      <Link href={link} className={`${s.navItem} ${s.link}`}>
        {label}
      </Link>
    );
  }
};

export default NavItem;
