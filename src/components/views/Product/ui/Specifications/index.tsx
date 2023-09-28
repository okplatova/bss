import { observer } from "mobx-react-lite";

import { useStores } from "@/shared/context";

import s from "./styles.module.sass";

import { Button } from "@/components/ui/Button";
import { specificationsList } from "../../data/specificationsList";
import { SectionTitle } from "@/components/ui/SectionTitle";

const Specifications = () => {
  const { calculator } = useStores();

  const handleOpenCalculator = () => {
    calculator.handleOpenMenu();
  };

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
        onClick={handleOpenCalculator}
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

export default observer(Specifications);
