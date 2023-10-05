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

const Equipments = () => {
  const { equipmentMenu } = useStores();
  const { push } = useRouter();

  const handleOpenMenu = () => {
    equipmentMenu.handleOpenMainMenu(false);
    equipmentMenu.handleOpenSecondMenu(false);
    equipmentMenu.handleOpenThirdMenu(false);
  };

  const handleOpenSecondMenu = (id: number) => {
    equipmentMenu.setEquipmentTypeId(id);
    equipmentMenu.handleOpenSecondMenu(true);
  };
  const handleOpenThirdMenu = (id: number) => {
    equipmentMenu.setEquipmentListId(id);
    equipmentMenu.handleOpenThirdMenu(true);
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
          {equipmentsTypes.map((type, index) => {
            const btnClass = `${
              equipmentMenu.equipmentTypeId &&
              index === equipmentMenu.equipmentTypeId - 1
                ? s.active
                : ""
            }`;
            return (
              <Button
                key={type.id}
                onClick={() => handleOpenSecondMenu(type.id)}
                size="medium"
                variable="clear"
                ariaLabel="equipmentType"
                className={btnClass}
              >
                {type.title}
              </Button>
            );
          })}
        </div>
        <div className={equipmentListClass}>
          {equipmentsMenuList.map((item, index) => {
            const btnClass = `${
              equipmentMenu.equipmentListId &&
              index === equipmentMenu.equipmentListId - 1
                ? s.active
                : ""
            }`;
            return (
              <Button
                key={item.id}
                onClick={() => handleOpenThirdMenu(item.id)}
                size="medium"
                variable="clear"
                ariaLabel="equipmentType"
                className={btnClass}
              >
                Экраны для улиц и помещений
              </Button>
            );
          })}
        </div>
        <div className={equipmentClass}>
          <div className={s.scrollContent}>
            <div className={s.imageWrapper}>
              <Image src="/catalog/img.jpg" fill alt="equipment" />
            </div>
            <div className={s.equipmentsItems}>
              {equipmentsList.map((equipment) => (
                <EquipmentItem
                  key={equipment.id}
                  title={equipment.title}
                  type={equipment.type}
                  options={equipment.options}
                  variant="light"
                />
              ))}
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
