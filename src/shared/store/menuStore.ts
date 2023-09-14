import { makeAutoObservable } from "mobx";

class MenuStore {
  menuIsOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  handleOpenMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}

const menuStore = new MenuStore();

export default menuStore;
