import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useStores } from "@/shared/context";
import { equipments } from "../../data/equipments";

import s from "./styles.module.sass";

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Player } from "@/components/common/Player";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Title } from "@/components/ui/Title";
import { EquipmentItem } from "@/components/common/EquipmentItem";
import ProjectionSwiper from "../ProjectionSwiper";
import MobileMenu from "../MobileMenu";
import { OutlineArrowRight } from "@/components/ui/OutlineArrowRight";
import { FC, useEffect, useState } from "react";

const breadcrumbs = [
  {
    label: "Главная",
    link: "/",
  },
  {
    label: "Видеопроекционные комплексы",
  },
];

const VideoProjection: FC<any> = ({ complexes }) => {
  const { projection } = useStores();

  const [selectedComplex, setSelectedComplex] = useState<string>(
    complexes[0].CONTENT["Комплексы"][0].NAME
  );
  const handleOpenMenu = () => {
    projection.handleOpenMenu();
  };

  const toggleComplex = (title: string) => {
    setSelectedComplex(title);
  };
  useEffect(() => {
    setSelectedComplex(complexes[0].CONTENT["Комплексы"][0].NAME);
    projection.setCatalogItem({
      id: 0,
      title: complexes[0].CONTENT["Комплексы"][0].NAME,
      count: 0,
    });
  }, [complexes, projection]);

  const filteredProduct =
    complexes &&
    //@ts-ignore
    complexes[0].CONTENT["Комплексы"].filter((item) => {
      return item.NAME === selectedComplex;
    });

  return (
    <div className={s.projection}>
      <Breadcrumbs items={breadcrumbs} />
      <div className={`${s.top} container`}>
        <Title variant="h1" className={s.title}>
          Видеопроекционные комплексы
        </Title>
        <p className={s.description}>
          Наша компания оказывает консультационные услуги по подбору
          оборудования при создании сложных видеопроекционных компексов,
          съёмочных студий и павильонов. Мы помогаем в решении сложных задач
          оснащения концертных площадок комплексами отображения информации,
          расширяя границы традиционного использования экранов, проекторов и
          воспроизводящих серверов.
        </p>
      </div>
      <div className={s.content}>
        <div className={s.imageWrapper}>
          <Image src="/video.jpg" fill alt="video" />
        </div>
        {/* <Player url={complexes[0].CONTENT["Видео"]} /> */}
        <div className={s.complexes}>
          <div className="container">
            <SectionTitle label="Комплексы" />
          </div>
          <MobileMenu
            complexes={complexes[0].CONTENT["Комплексы"]}
            toggleComplex={setSelectedComplex}
          />
          <div className={s.modalBtnWrapper}>
            <Button
              onClick={handleOpenMenu}
              size="medium"
              variable="clear"
              ariaLabel="open-modal"
            >
              <span>{projection.currentCatalogItem.title}</span>
              <OutlineArrowRight />
            </Button>
          </div>
          <div className={s.complexesContent}>
            <div className={s.complexesListWrapper}>
              <div className={s.complexesList}>
                {complexes[0].CONTENT["Комплексы"].map((complex: any) => {
                  const buttonClass = `${s.complexeBtn} ${
                    selectedComplex === complex.NAME ? s.active : ""
                  }`;
                  return (
                    <Button
                      key={complex.ID}
                      onClick={() => toggleComplex(complex.NAME)}
                      size="medium"
                      ariaLabel="complexe"
                      variable="clear"
                      className={buttonClass}
                    >
                      {complex.NAME}
                    </Button>
                  );
                })}
              </div>
            </div>
            <div className={s.complexeContent}>
              <div className={s.complexeContentItem}>
                <SectionTitle label="Видеопроекционный комплекс" />
                <ProjectionSwiper images={filteredProduct[0].PICTURE} />
              </div>
              <div className={s.complexeContentItem}>
                <SectionTitle label="Оборудование" />
                <div className={s.quipmentList}>
                  {filteredProduct[0].OBORUDOVANIE ? (
                    <>
                      {filteredProduct[0].OBORUDOVANIE.map((equipment: any) => (
                        //@ts-ignore
                        <EquipmentItem
                          key={equipment.NAME}
                          title={equipment.NAME}
                          type={equipment.NAME}
                          // options={equipment.options}
                        />
                      ))}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(VideoProjection);
