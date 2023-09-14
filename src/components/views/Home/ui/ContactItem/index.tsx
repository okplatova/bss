import { FC } from "react";

import { IContactItemProps } from "../../types/contactItem.interface";

import s from "./styles.module.sass";

const ContactItem: FC<IContactItemProps> = ({
  title,
  links,
  isMail = false,
}) => {
  return (
    <div className={s.contactItem}>
      <h6>{title}</h6>
      <h4>
        {links.map((link) => (
          <a key={link} href={`${isMail ? "mailto:" : "tel:"}${link}`}>
            {link}
          </a>
        ))}
      </h4>
    </div>
  );
};

export default ContactItem;
