import { FC } from "react";
import { ISectionTitleProps } from "../types/sectionTitle.interface";

import s from "./styles.module.sass";

const SectionTitle: FC<ISectionTitleProps> = ({ label, color = "white" }) => {
  const sectionColor = s[color];

  return (
    <div className={`${s.sectionTitle} ${sectionColor}`}>
      <div className={s.square} />
      <span>{label}</span>
    </div>
  );
};

export default SectionTitle;
