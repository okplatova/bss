import { StaticImageData } from "next/image";
import { CSSProperties } from "react";

export interface IEquipmentItemProps {
  title: string;
  img: StaticImageData;
  className: string;
  customStyles: CSSProperties;
}
