import { useRouter } from "next/router";
import Image from "next/image";

import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/CloseIcon";
import { useStores } from "@/shared/context";
import { equipmentsList } from "../../data/equipmentsList";
import { EquipmentItem } from "@/components/common/EquipmentItem";
import { equipmentsTypes } from "../../data/equipmentsTypes";
import { equipmentsMenuList } from "../../data/equipmentsMenuList";
import { useGetProduct } from "@/shared/hooks";
import { useState } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

const Equipments = () => {
  const [equipments, setEquipments] = useState(null);

  const { equipmentMenu } = useStores();
  const { push } = useRouter();
  const { product } = useGetProduct();
  //@ts-ignore
  const filteredProduct = product?.filter((item) => {
    return item.ID === equipmentMenu.equipmentTypeId;
  });

  const handleOpenMenu = () => {
    equipmentMenu.handleOpenMainMenu(false);
    equipmentMenu.handleOpenSecondMenu(false);
    equipmentMenu.handleOpenThirdMenu(false);
  };

  const handleOpenSecondMenu = (id: number) => {
    equipmentMenu.setEquipmentTypeId(id);
    equipmentMenu.handleOpenSecondMenu(true);
  };
  const handleOpenThirdMenu = (id: number, item: any) => {
    equipmentMenu.setEquipmentListId(id);
    equipmentMenu.handleOpenThirdMenu(true);
    setEquipments(item);
  };

  const equipmentsMenuClass = `${s.equipmentsMenu} ${
    equipmentMenu.mainMenuIsOpen ? s.active : ""
  }`;

  const equipmentListClass = `${s.equipmentsList} ${
    equipmentMenu.secondMenuIsOpen ? s.active : ""
  }`;
  const equipmentClass = `${s.equipment} ${
    equipmentMenu.thirdMenuIsOpen ? s.active : ""
  }`;
  return (
    <div className={equipmentsMenuClass} onClick={(e) => e.stopPropagation()}>
      <div className={s.top}>
        <span className={s.title}>все оборудование</span>
        <Button
          className={s.closebtn}
          onClick={handleOpenMenu}
          size="medium"
          variable="clear"
          ariaLabel="close"
        >
          <CloseIcon />
        </Button>
      </div>
      <div className={s.content}>
        <div className={s.equipmentsTypes}>
          {
            //@ts-ignore
            product?.map((type, index) => {
              const btnClass = `${
                equipmentMenu.equipmentTypeId &&
                type.ID === equipmentMenu.equipmentTypeId
                  ? s.active
                  : ""
              }`;
              const children = type.CHILD && Object.values(type.CHILD);

              return (
                <>
                  {children ? (
                    <Button
                      key={type.ID}
                      onClick={() => handleOpenSecondMenu(type.ID)}
                      size="medium"
                      variable="clear"
                      ariaLabel="equipmentType"
                      className={btnClass}
                    >
                      {type.NAME}
                    </Button>
                  ) : null}
                </>
              );
            })
          }
        </div>
        <div className={equipmentListClass}>
          {filteredProduct?.length > 0 &&
            filteredProduct[0].CHILD &&
            Object.values(filteredProduct[0].CHILD).map((item: any, index) => {
              const btnClass = `${
                equipmentMenu.equipmentListId &&
                //@ts-ignore
                item.ID === equipmentMenu.equipmentListId
                  ? s.active
                  : ""
              }`;
              return (
                <Button
                  //@ts-ignore
                  key={item.ID}
                  //@ts-ignore
                  onClick={() => handleOpenThirdMenu(item.ID, item)}
                  size="medium"
                  variable="clear"
                  ariaLabel="equipmentType"
                  className={btnClass}
                >
                  {item.NAME}
                </Button>
              );
            })}
        </div>
        <div className={equipmentClass}>
          <div className={s.scrollContent}>
            {
              //@ts-ignore
              equipments?.PICTURE ? (
                <div className={s.imageWrapper}>
                  {
                    //@ts-ignore
                    equipments?.PICTURE ? (
                      <Image
                        //@ts-ignore
                        src={`https://dev9.paradigma-digital.ru/${equipments.PICTURE}`}
                        fill
                        alt="equipment"
                      />
                    ) : (
                      <Skeleton className={s.imageSkeleton} />
                    )
                  }
                </div>
              ) : null
            }

            <div className={s.equipmentsItems}>
              {
                //@ts-ignore
                equipments && equipments.ITM
                  ? //@ts-ignore
                    Object.values(equipments.ITM).map((equipment) => (
                      <EquipmentItem
                        //@ts-ignore
                        key={equipment.ID}
                        // title={equipment.CONTENT["Заголовок"]}
                        //@ts-ignore
                        type={equipment.CONTENT["Заголовок"]}
                        //@ts-ignore
                        option1={equipment.CONTENT["Свойства для Анонса 1"]}
                        //@ts-ignore
                        option2={equipment.CONTENT["Свойства для Анонса 2"]}
                        //@ts-ignore
                        option3={equipment.CONTENT["Свойства для Анонса 3"]}
                        variant="light"
                      />
                    ))
                  : null
              }
            </div>
          </div>

          <Button
            onClick={() => push("/catalog")}
            size="medium"
            ariaLabel="link"
            className={s.linkBtn}
          >
            перейти в раздел
          </Button>
        </div>
      </div>
    </div>
  );
};

export default observer(Equipments);
