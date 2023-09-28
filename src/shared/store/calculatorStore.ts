import { makeAutoObservable } from "mobx";

class CalculatorStore {
  menuIsOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  handleOpenMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}

const calculatorStore = new CalculatorStore();

export default calculatorStore;
