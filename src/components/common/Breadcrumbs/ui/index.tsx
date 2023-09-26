import { FC } from "react";
import { useRouter } from "next/router";

import { IBreadcrumbsProps } from "../types/breadcrumbs.interface";

import s from "./styles.module.sass";

const Breadcrumbs: FC<IBreadcrumbsProps> = ({ items, className }) => {
  const { push } = useRouter();

  const breadcrumbsClass = `${s.breadcrumbs} ${className ? className : ""}`;

  return (
    <div className={breadcrumbsClass}>
      {items.map((item) => {
        const pushTo = () => {
          if (item.link) {
            push(item.link);
          }
        };

        const isLast = !item.link;

        return (
          <div
            onClick={pushTo}
            key={item.label}
            className={`${s.link} ${isLast ? s.last : ""}`}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
