import { Url } from "next/dist/shared/lib/router/router";

export interface INavItemProps {
  label: string;
  isPhone?: boolean;
  isMail?: boolean;
  isLink?: boolean;
  link: Url;
}
