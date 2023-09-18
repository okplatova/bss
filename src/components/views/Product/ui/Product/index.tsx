import Image from "next/image";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import ProductSwiper from "./../ProductSwiper/index";
import Specifications from "../Specifications";
import Interactive from "../Interactive";
import Certificates from "../Certificates";
import Projects from "../Projects";

const Product = () => {
  return (
    <div className={s.product}>
      <div className={s.top}>
        <Title variant="h2" className="container">
          p3
        </Title>
        <span className={s.type}>световое оборудование</span>
      </div>
      <div className={s.content}>
        <div className={s.swiper}>
          <ProductSwiper />
        </div>
        <Specifications />
        <div className={s.empty} />
        <Interactive />
        <Certificates />
      </div>
      <Projects />
    </div>
  );
};

export default Product;