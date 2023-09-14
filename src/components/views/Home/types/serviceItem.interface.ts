import { StaticImageData } from "next/image";
import { ReactElement, ReactNode } from "react";

export interface IServiceItemProps {
  img: StaticImageData;
  title: string;
  text: string;
}
