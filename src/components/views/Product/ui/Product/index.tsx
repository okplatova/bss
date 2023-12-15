import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import ProductSwiper from "./../ProductSwiper/index";
import Specifications from "../Specifications";
import Interactive from "../Interactive";
import Certificates from "../Certificates";
import Projects from "../Projects";
import { Calculator } from "../Calculator";
import { useGetProduct } from "@/shared/hooks";
import { FC } from "react";
import VideoPresentation from "../VideoPresentation";

const Product: FC<any> = ({ product }) => {
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
      label: product.CONTENT["Заголовок"] ? product.CONTENT["Заголовок"] : null,
    },
  ];

  return (
    <div className={s.product}>
      {product.CONTENT["Калькулятор"] ? (
        <Calculator specifications={product.CONTENT["Характеристики"]} />
      ) : null}

      <Breadcrumbs items={breadcrumbs} />
      <div className={s.top}>
        <Title variant="h2" className="container">
          {product.CONTENT["Заголовок"] ? product.CONTENT["Заголовок"] : null}
        </Title>
        <span className={s.type}>{product.CONTENT["Тип оборудования"]}</span>
      </div>
      <div className={s.content}>
        <div className={s.swiperWrapper}>
          {product.CONTENT["Картинки"] ? (
            <ProductSwiper images={product.CONTENT["Картинки"]} />
          ) : null}
        </div>
        {product.CONTENT["Характеристики"] ? (
          <Specifications
            calc={product.CONTENT["Калькулятор"]}
            specifications={product.CONTENT["Характеристики"]}
          />
        ) : null}
        {product.CONTENT["Эффект Картинка"] || product.CONTENT["Описание"] ? (
          <Interactive
            text={product.CONTENT["Описание"]}
            images={product.CONTENT["Эффект Картинка"]}
          />
        ) : null}

        {product.CONTENT["Сертификаты"] ? (
          <Certificates сertificates={product.CONTENT["Сертификаты"]} />
        ) : null}
        {product.CONTENT["Видеопрезентация"] ? (
          <VideoPresentation video={product.CONTENT["Видеопрезентация"]} />
        ) : null}
      </div>
      {product.CONTENT["Проекты"] ? (
        <Projects projects={product.CONTENT["Проекты"]} />
      ) : null}
    </div>
  );
};

export default Product;
