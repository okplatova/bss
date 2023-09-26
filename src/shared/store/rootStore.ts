import catalogStore from "./catalogMenu";
import mainSliderStore from "./mainSliderStore";
import menuStore from "./menuStore";
import projectionStore from "./projectionStore";

class RootStore {
  menu = menuStore;
  slider = mainSliderStore;
  catalog = catalogStore;
  projection = projectionStore;
}

export default RootStore;
