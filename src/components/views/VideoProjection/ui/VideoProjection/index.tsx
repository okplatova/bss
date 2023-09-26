import s from "./styles.module.sass";

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Player } from "@/components/common/Player";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Title } from "@/components/ui/Title";
import ProjectionSwiper from "../ProjectionSwiper";
import EquipmentSwiper from "../EquipmentSwiper";
import { equipments } from "../../data/equipments";
import { EquipmentItem } from "@/components/common/EquipmentItem";

const breadcrumbs = [
  {
    label: "Главная",
    link: "/",
  },
  {
    label: "Видеопроекционные комплексы",
  },
];

const VideoProjection = () => {
  return (
    <div className={s.projection}>
      <Breadcrumbs items={breadcrumbs} />
      <div className={`${s.top} container`}>
        <Title variant="h1" className={s.title}>
          Видеопроекционные комплексы
        </Title>
        <p className={s.description}>
          Подготовим инсталяции видеокомплексов любой сложности, подберем и
          поможем приобрести оборудование и софт для вашей концепции с
          написанием подробной технической документации
        </p>
      </div>
      <div className={s.content}>
        <Player url="https://vimeo.com/842048913" />
        <div className={s.complexes}>
          <div className="container">
            <SectionTitle label="Комплексы" />
          </div>
          <div className={s.complexesContent}>
            <div className={s.complexesList}>
              <Button
                onClick={() => {}}
                size="medium"
                ariaLabel="complexe"
                variable="clear"
                className={s.complexeBtn}
              >
                Комплекс 1
              </Button>
              <Button
                onClick={() => {}}
                size="medium"
                ariaLabel="complexe"
                variable="clear"
                className={s.complexeBtn}
              >
                Комплекс 2
              </Button>
            </div>
            <div className={s.complexeContent}>
              <div className={s.complexeContentItem}>
                <SectionTitle label="Видеопроекционный комплекс" />
                <ProjectionSwiper />
              </div>
              <div className={s.complexeContentItem}>
                <SectionTitle label="Оборудование" />
                <EquipmentSwiper />
                <div className={s.quipmentList}>
                  {equipments.map((equipment) => (
                    <EquipmentItem
                      key={equipment.id}
                      title={equipment.title}
                      type={equipment.type}
                      options={equipment.options}
                    />
                  ))}
                </div>
                <Button
                  className={s.loadBtn}
                  onClick={() => {}}
                  size="medium"
                  ariaLabel="load more"
                >
                  Показать еще
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoProjection;
