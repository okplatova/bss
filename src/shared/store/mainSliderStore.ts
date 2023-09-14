import { makeAutoObservable } from "mobx";

class MainSliderStore {
  currentSlide = 1;
  totalSlides = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentSlide(slide: number) {
    this.currentSlide = slide;
  }
  setTotalSlides(total: number) {
    this.totalSlides = total;
  }
}

const mainSliderStore = new MainSliderStore();

export default mainSliderStore;
