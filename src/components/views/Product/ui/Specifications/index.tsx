import { SectionTitle } from "@/components/ui/SectionTitle";
import s from "./styles.module.sass";

import { Button } from "@/components/ui/Button";
import { specificationsList } from "../../data/specificationsList";

const Specifications = () => {
  return (
    <div className={s.specifications}>
      <SectionTitle label="Характеристики" />
      <div className={s.specificationsList}>
        {specificationsList.map((specification) => (
          <div key={specification.id} className={s.specification}>
            <p>{specification.title}</p>
            <div className={s.line} />
            <p>{specification.label}</p>
          </div>
        ))}
      </div>
      <Button
        className={s.calcBtn}
        size="medium"
        variable="secondary"
        ariaLabel="calculator"
      >
        Калькулятор
      </Button>
    </div>
  );
};

export default Specifications;
