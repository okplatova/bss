import { makeAutoObservable } from "mobx";

class EquipmentsMenuStore {
  mainMenuIsOpen = false;
  secondMenuIsOpen = false;
  thirdMenuIsOpen = false;

  equipmentTypeId: number | null = null;
  equipmentListId: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  handleOpenMainMenu(type?: boolean) {
    if (type !== undefined) {
      this.mainMenuIsOpen = type;
      return;
    }
    this.mainMenuIsOpen = !this.mainMenuIsOpen;
  }
  handleOpenSecondMenu(type?: boolean) {
    if (type !== undefined) {
      this.secondMenuIsOpen = type;
      return;
    }
    this.secondMenuIsOpen = !this.secondMenuIsOpen;
  }
  handleOpenThirdMenu(type?: boolean) {
    if (type !== undefined) {
      this.thirdMenuIsOpen = type;
      return;
    }
    this.thirdMenuIsOpen = !this.thirdMenuIsOpen;
  }

  setEquipmentTypeId(id: number) {
    this.equipmentTypeId = id;
  }
  setEquipmentListId(id: number) {
    this.equipmentListId = id;
  }
}

const equipmentsMenuStore = new EquipmentsMenuStore();

export default equipmentsMenuStore;
