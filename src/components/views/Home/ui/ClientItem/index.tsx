import { FC } from "react";
import Image from "next/image";

import { IClientItemProps } from "../../types/clientItem.interface";

import s from "./styles.module.sass";

const ClientItem: FC<IClientItemProps> = ({ img }) => {
  return (
    <div className={s.clientItem}>
      <div className={s.imageWrapper}>
        <Image
          src={`https://adm.bss-tv.com${img}`}
          alt="client"
          fill
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ClientItem;
