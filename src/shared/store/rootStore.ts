import catalogStore from "./catalogMenu";
import mainSliderStore from "./mainSliderStore";
import menuStore from "./menuStore";

class RootStore {
  menu = menuStore;
  slider = mainSliderStore;
  catalog = catalogStore;
}

export default RootStore;
