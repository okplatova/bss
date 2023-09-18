import { Url } from "next/dist/shared/lib/router/router";

export interface IBreadcrumbsProps {
  items: Item[];
}

type Item = {
  label: string;
  link?: Url;
};
