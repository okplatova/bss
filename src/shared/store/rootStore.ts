import calculatorStore from "./calculatorStore";
import catalogStore from "./catalogMenu";
import equipmentsMenuStore from "./equipmentsMenuStore";
import mainSliderStore from "./mainSliderStore";
import menuStore from "./menuStore";
import projectionStore from "./projectionStore";

class RootStore {
  menu = menuStore;
  slider = mainSliderStore;
  catalog = catalogStore;
  projection = projectionStore;
  calculator = calculatorStore;
  equipmentMenu = equipmentsMenuStore;
}

export default RootStore;
