import { FC } from "react";
import Image from "next/image";

import { IServiceItemProps } from "../../types/serviceItem.interface";

import s from "./styles.module.sass";

const ServiceItem: FC<IServiceItemProps> = ({ img, title, text }) => {
  return (
    <div className={s.serviceItem}>
      <div className={s.title}>
        <h6>{title}</h6>
        <Image
          src={`https://adm.bss-tv.com${img}`}
          alt={title}
          width={72}
          height={72}
          loading="lazy"
        />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ServiceItem;
