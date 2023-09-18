import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

import product1 from "../../../../../../public/equipments/equipment3.png";
import product2 from "../../../../../../public/equipments/equipment4.png";
import product3 from "../../../../../../public/equipments/equipment5.png";
const images = [
  {
    original: product1.src,
    thumbnail: product1.src,
  },
  {
    original: product2.src,
    thumbnail: product2.src,
  },
  {
    original: product3.src,
    thumbnail: product3.src,
  },
];

const ProductSwiper = () => {
  return (
    <ImageGallery
      items={images}
      showNav={false}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  );
};

export default ProductSwiper;
