import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import ResultSwiper from "./../ResultSwiper/index";

const ResultSection = () => {
  return (
    <div className={s.section}>
      <SectionTitle label="Результат" />
      <ResultSwiper />
    </div>
  );
};

export default ResultSection;
