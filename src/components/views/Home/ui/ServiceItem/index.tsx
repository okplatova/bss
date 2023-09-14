import { FC } from "react";

import { IServiceItemProps } from "../../types/serviceItem.interface";

import s from "./styles.module.sass";

const ServiceItem: FC<IServiceItemProps> = ({ icon, title, text }) => {
  return (
    <div className={s.serviceItem}>
      <div className={s.title}>
        <h6>{title}</h6>
        {icon}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ServiceItem;
