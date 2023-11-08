import s from "./styles.module.sass";

import { serviceList } from "../../data/serviceList";

import ServiceItem from "../ServiceItem";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useGetServices } from "@/shared/hooks/useGetServices";

const ServicesSection = () => {
  const { services } = useGetServices();

  return (
    <section className={`${s.section} container`}>
      <SectionTitle label="Услуги" />
      <div className={s.serviceList}>
        {
          //@ts-ignore
          services?.map((service: any) => (
            <ServiceItem
              key={service.ID}
              img={service.PICTURE}
              title={service.NAME}
              text={service.TEXT}
            />
          ))
        }
      </div>
    </section>
  );
};

export default ServicesSection;
