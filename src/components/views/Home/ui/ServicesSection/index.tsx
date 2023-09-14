import s from "./styles.module.sass";

import { serviceList } from "../../data/serviceList";

import ServiceItem from "../ServiceItem";
import { SectionTitle } from "@/components/ui/SectionTitle";

const ServicesSection = () => {
  return (
    <section className={`${s.section} container`}>
      <SectionTitle label="Услуги" />
      <div className={s.serviceList}>
        {serviceList.map((service) => (
          <ServiceItem
            key={service.id}
            img={service.img}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
