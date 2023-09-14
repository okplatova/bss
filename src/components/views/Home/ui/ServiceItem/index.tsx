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
          src={img.src}
          alt={title}
          width={img.width}
          height={img.height}
        />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ServiceItem;
