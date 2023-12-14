import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Controller, FieldValues, useForm } from "react-hook-form";

import { useStores } from "@/shared/context";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/CloseIcon";
import { Input } from "@/components/ui/Input";

const Calculator: FC<any> = ({ specifications }) => {
  const { calculator } = useStores();

  const { register, control, watch } = useForm<FieldValues>({
    defaultValues: {
      width: 1,
      height: 1,
    },
  });
  const WatchWidth = watch("width");
  const WatchHeight = watch("height");
  const handleOpentMenu = () => {
    calculator.handleOpenMenu();
  };

  useEffect(() => {
    if (calculator.menuIsOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [calculator.menuIsOpen]);

  const menuClass = `${s.menu} ${calculator.menuIsOpen ? s.active : ""}`;

  const sizeFilster = specifications.filter((specification: any) => {
    return specification["Название"].includes("Размер модуля");
  });
  const size = sizeFilster[0]["Значение"].match(/\d+/g).map(Number);

  const permissionFilster = specifications.filter((specification: any) => {
    return specification["Название"].includes("Разрешение");
  });

  const permission = permissionFilster[0]["Значение"].match(/\d+/g).map(Number);

  return (
    <div className={menuClass} onClick={handleOpentMenu}>
      <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={s.top}>
          <Title variant="h3" className={s.title}>
            P3
          </Title>
          <Button
            className={s.closebtn}
            onClick={handleOpentMenu}
            size="medium"
            variable="clear"
            ariaLabel="close"
          >
            <CloseIcon />
          </Button>
        </div>
        <div className={s.content}>
          <div className={s.quantityCalc}>
            <span className={s.sectionTitle}>количество модулей</span>
            <div className={s.inputs}>
              <div className={s.inputWrapper}>
                <span>В ширину</span>
                <Controller
                  control={control}
                  name="width"
                  rules={{ required: true, pattern: /^[0-9.]+$/ }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        register={register}
                        id="width"
                        pattern={/^[0-9.]+$/}
                        value={value.toString().replace(/[^0-9.]/g, "")}
                      />
                    );
                  }}
                />
              </div>
              <div className={s.inputWrapper}>
                <span>В высоту</span>
                {/* <Input /> */}
                <Controller
                  control={control}
                  name="height"
                  rules={{ required: true, pattern: /^[0-9.]+$/ }}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        register={register}
                        id="height"
                        pattern={/^[0-9.]+$/}
                        value={value.toString().replace(/[^0-9.]/g, "")}
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className={s.mainContent}>
            <div className={s.section}>
              <span className={s.preSectionTitle}>размеры</span>
              <div className={s.sectionItems}>
                <div className={s.sectionItem}>
                  <span>Ширина</span>
                  <div className={s.separator} />
                  <span>{(size[0] / 1000) * +WatchWidth} метров</span>
                </div>
                <div className={s.sectionItem}>
                  <span>Высота</span>
                  <div className={s.separator} />
                  <span>{(size[1] / 1000) * +WatchHeight} метров</span>
                </div>
              </div>
            </div>
            <div className={s.section}>
              <span className={s.preSectionTitle}>Разрешение</span>
              <div className={s.sectionItems}>
                <div className={s.sectionItem}>
                  <span>Ширина</span>
                  <div className={s.separator} />
                  <span>{permission[0] * +WatchWidth} px</span>
                </div>
                <div className={s.sectionItem}>
                  <span>Высота</span>
                  <div className={s.separator} />
                  <span>{permission[1] * +WatchHeight} px</span>
                </div>
              </div>
            </div>
            <div className={s.section}>
              <span className={s.preSectionTitle}>Количество модулей</span>
              <div className={s.sectionItems}>
                <div className={s.sectionItem}>
                  <span>Ширина</span>
                  <div className={s.separator} />
                  <span>{+WatchWidth * +WatchHeight} шт</span>
                </div>
              </div>
            </div>
            <div className={s.section}>
              <span className={s.preSectionTitle}>Площадь экрана</span>
              <div className={s.sectionItems}>
                <div className={s.sectionItem}>
                  <span>Общая</span>
                  <div className={s.separator} />
                  <span>
                    {(size[0] / 1000) *
                      +WatchWidth *
                      ((size[1] / 1000) * +WatchHeight)}
                    м<sup>2</sup>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Calculator);
