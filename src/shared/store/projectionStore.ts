import { makeAutoObservable } from "mobx";

type CatalogItem = {
  id: number;
  title: string;
  count: number;
};

class ProjectionStore {
  menuIsOpen = false;
  currentCatalogItem: CatalogItem = {
    id: 0,
    title: "Выберите картегорию",
    count: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }

  handleOpenMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
  setCatalogItem(item: CatalogItem) {
    this.currentCatalogItem = item;
  }
}

const projectionStore = new ProjectionStore();

export default projectionStore;
