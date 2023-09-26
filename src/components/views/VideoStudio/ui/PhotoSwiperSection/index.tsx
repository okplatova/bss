import { SectionTitle } from "@/components/ui/SectionTitle";
import s from "./styles.module.sass";
import PhotoSwiper from "../PhotoSwiper";

const PhotoSwiperSection = () => {
  return (
    <section className={`${s.photo} container`}>
      <SectionTitle label="Фото студии" />
      <PhotoSwiper />
    </section>
  );
};

export default PhotoSwiperSection;
