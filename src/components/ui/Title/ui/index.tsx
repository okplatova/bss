import { FC, PropsWithChildren } from "react";
import { ITitleProps } from "../types/title.interface";

import s from "./styles.module.sass";

const Title: FC<PropsWithChildren<ITitleProps>> = ({
  variant = "h1",
  children,
  className,
  onClick,
}) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  const titleClass = `${s.title} ${s[variant]} ${className}`;

  return (
    <Tag onClick={onClick} className={titleClass}>
      {children}
    </Tag>
  );
};

export default Title;
