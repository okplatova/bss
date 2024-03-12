import { FC } from "react";
import { useRouter } from "next/router";

import { IBreadcrumbsProps } from "../types/breadcrumbs.interface";

import s from "./styles.module.sass";
import he from "he";

const Breadcrumbs: FC<IBreadcrumbsProps> = ({ items, className }) => {
  const { push } = useRouter();

  const breadcrumbsClass = `${s.breadcrumbs} ${className ? className : ""}`;
  console.log("====================================");
  console.log(items);
  console.log("====================================");
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
            {he.decode(item.label)}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
