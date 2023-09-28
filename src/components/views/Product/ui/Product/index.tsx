import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import ProductSwiper from "./../ProductSwiper/index";
import Specifications from "../Specifications";
import Interactive from "../Interactive";
import Certificates from "../Certificates";
import Projects from "../Projects";
import { Calculator } from "../Calculator";

const breadcrumbs = [
  {
    label: "Главная",
    link: "/",
  },
  {
    label: "Оборудование",
    link: "/catalog",
  },
  {
    label: "P3",
  },
];

const Product = () => {
  return (
    <div className={s.product}>
      <Calculator />
      <Breadcrumbs items={breadcrumbs} />
      <div className={s.top}>
        <Title variant="h2" className="container">
          p3
        </Title>
        <span className={s.type}>световое оборудование</span>
      </div>
      <div className={s.content}>
        <div className={s.swiperWrapper}>
          <ProductSwiper />
        </div>
        <Specifications />
        <Interactive />
        <Certificates />
      </div>
      <Projects />
    </div>
  );
};

export default Product;
