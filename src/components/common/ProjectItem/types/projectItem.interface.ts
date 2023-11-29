import { CSSProperties } from "react";

export interface IProjectItemProps {
  title: string;
  year: string;
  img: string;
  isGrid?: boolean;
  customStyles?: CSSProperties;
  link: string;
}
