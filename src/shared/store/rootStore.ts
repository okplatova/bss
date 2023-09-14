import mainSliderStore from "./mainSliderStore";
import menuStore from "./menuStore";

class RootStore {
  menu = menuStore;
  slider = mainSliderStore;
}

export default RootStore;
