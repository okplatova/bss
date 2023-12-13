import { observer } from "mobx-react-lite";

import { useStores } from "@/shared/context";

import s from "./styles.module.sass";

import { Button } from "@/components/ui/Button";
import { specificationsList } from "../../data/specificationsList";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FC } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

const Specifications: FC<any> = ({ specifications }) => {
  const { calculator } = useStores();

  const handleOpenCalculator = () => {
    calculator.handleOpenMenu();
  };

  return (
    <div className={s.specifications}>
      <SectionTitle label="Характеристики" />
      <div className={s.specificationsList}>
        {specifications.map((specification: any) => (
          <div key={specification["Название"]} className={s.specification}>
            {!specification["Название"] ? (
              <Skeleton className={s.skeleton} />
            ) : (
              <p>{specification["Название"]}</p>
            )}

            {!specification["Значение"] ? null : (
              <>
                <div className={s.line} />

                <p>{specification["Значение"]}</p>
              </>
            )}
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
