import s from "./styles.module.sass";

import ServiceItem from "../ServiceItem";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechnicalSupportIcon } from "@/components/ui/TechnicalSupportIcon";
import { RentIcon } from "@/components/ui/RentIcon";
import { VideoStudioIcon } from "@/components/ui/VideoStudioIcon";
import { TechnicalDevelopmentIcon } from "@/components/ui/TechnicalDevelopmentIcon";

const ServicesSection = () => {
  return (
    <section className={`${s.section} container`}>
      <SectionTitle label="Услуги" />
      <div className={s.serviceList}>
        <ServiceItem
          icon={<TechnicalSupportIcon />}
          title="Техническая поддержка"
          text="Осуществляем профессиональную техническую поддержку на всех этапах мероприятий, чтобы гарантировать безупречное проведение и обеспечить успех вашего мероприятия"
        />
        <ServiceItem
          icon={<RentIcon />}
          title="Аренда"
          text="Предоставляем полный комплекс услуг по аренде видеопроекционного оборудования, чтобы удовлетворить ваши потребности в визуальных решениях на различных мероприятиях"
        />
        <ServiceItem
          icon={<VideoStudioIcon />}
          title="Видеостудия"
          text="Разработаем видео-контент любой сложности, от концептуализации и сценаризации до съемки, монтажа и пост-продакшна с учетом использования оборудовании на мероприятии "
        />
        <ServiceItem
          icon={<TechnicalDevelopmentIcon />}
          title="Техническая разработка"
          text="Подготовим инсталяции видеокомплексов любой сложности, подберем и поможем приобрести оборудование и софт для вашей концепции с написанием подробной технической документации"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
