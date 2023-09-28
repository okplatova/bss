import { makeAutoObservable } from "mobx";

class EquipmentsMenuStore {
  mainMenuIsOpen = false;
  secondMenuIsOpen = false;
  thirdMenuIsOpen = false;
  
  constructor() {
    makeAutoObservable(this);
  }

  handleOpenMainMenu() {
    this.mainMenuIsOpen = !this.mainMenuIsOpen;
  }
  handleOpenSecondMenu() {
    this.secondMenuIsOpen = !this.secondMenuIsOpen;
  }
  handleOpenThirdMenu() {
    this.thirdMenuIsOpen = !this.thirdMenuIsOpen;
  }
}

const equipmentsMenuStore = new EquipmentsMenuStore();

export default equipmentsMenuStore;
