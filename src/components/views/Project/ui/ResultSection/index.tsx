import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import ResultSwiper from "../ResultSwiper";
import { FC } from "react";

interface IResultSectionProps {
  author?: string;
  results: any;
}

const ResultSection: FC<IResultSectionProps> = ({ author, results }) => {
  console.log("author", author);

  return (
    <div className={s.section}>
      <SectionTitle label="Результат" />
      <ResultSwiper author={author} results={results} />
    </div>
  );
};

export default ResultSection;
