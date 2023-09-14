import { FC, PropsWithChildren } from "react";

import s from "./styles.module.sass";
import { IButtonProps } from "../types/button.interface";

const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  variable = "primary",
  size,
  className,
}) => {
  const btnClass = `${s.button} ${s[variable]} ${s[size]} ${className}`;

  return <button className={btnClass}>{children}</button>;
};

export default Button;
