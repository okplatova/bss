import { useRouter } from "next/router";
import Image from "next/image";

import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/CloseIcon";
import { useStores } from "@/shared/context";
import { equipmentsList } from "../../data/equipmentsList";
import { EquipmentItem } from "@/components/common/EquipmentItem";

const Equipments = () => {
  const { equipmentMenu } = useStores();
  const { push } = useRouter();

  const handleOpenMenu = () => {
    equipmentMenu.handleOpenMainMenu(false);
    equipmentMenu.handleOpenSecondMenu(false);
    equipmentMenu.handleOpenThirdMenu(false);
  };

  const handleOpenSecondMenu = () => {
    equipmentMenu.handleOpenSecondMenu(true);
  };
  const handleOpenThirdMenu = () => {
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
          <Button
            onClick={handleOpenSecondMenu}
            size="medium"
            variable="clear"
            ariaLabel="equipmentType"
          >
            Светодиодные экраны
          </Button>
          <Button
            onClick={handleOpenSecondMenu}
            size="medium"
            variable="clear"
            ariaLabel="equipmentType"
          >
            Проекционное оборудование
          </Button>
          <Button
            onClick={handleOpenSecondMenu}
            size="medium"
            variable="clear"
            ariaLabel="equipmentType"
          >
            Сенсорные и же панели
          </Button>
          <Button
            onClick={handleOpenSecondMenu}
            size="medium"
            variable="clear"
            ariaLabel="equipmentType"
          >
            Медиасерверы
          </Button>
          <Button
            onClick={handleOpenSecondMenu}
            size="medium"
            variable="clear"
            ariaLabel="equipmentType"
          >
            Пультовое и коммуникационное обрудование
          </Button>
          <Button
            onClick={handleOpenSecondMenu}
            size="medium"
            variable="clear"
            ariaLabel="equipmentType"
          >
            Системы движения экранов
          </Button>
        </div>
        <div className={equipmentListClass}>
          <Button
            onClick={handleOpenThirdMenu}
            size="medium"
            variable="clear"
            ariaLabel="equipmentType"
          >
            Экраны для улиц и помещений
          </Button>
          <Button
            onClick={handleOpenThirdMenu}
            size="medium"
            variable="clear"
            ariaLabel="equipmentType"
          >
            Экраны для помещений
          </Button>
          <Button
            onClick={handleOpenThirdMenu}
            size="medium"
            variable="clear"
            ariaLabel="equipmentType"
          >
            Креативные решения
          </Button>
          <Button
            onClick={handleOpenThirdMenu}
            size="medium"
            variable="clear"
            ariaLabel="equipmentType"
          >
            Типовые решения при установке экранов
          </Button>
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
