import { FC } from "react";

import { IContactItemProps } from "../types/contactItem.interface";

import s from "./styles.module.sass";

const ContactItem: FC<IContactItemProps> = ({
  title,
  links,
  isMail = false,
  className,
}) => {
  return (
    <div className={`${s.contactItem} ${className}`}>
      <span className={s.title}>{title}</span>
      <div className={s.contactLinks}>
        {links?.map((link) => (
          <a key={link} href={`${isMail ? "mailto:" : "tel:"}${link}`}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactItem;
