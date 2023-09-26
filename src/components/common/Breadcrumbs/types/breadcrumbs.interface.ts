import { Url } from "next/dist/shared/lib/router/router";

export interface IBreadcrumbsProps {
  items: Item[];
  className?: string;
}

type Item = {
  label: string;
  link?: Url;
};
