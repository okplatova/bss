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
        {services && (
          <ServiceItem
            key={
              //@ts-ignore
              services[1].ID
            }
            img={
              //@ts-ignore
              services[1].PICTURE
            }
            title={
              //@ts-ignore
              services[1].NAME
            }
            text={
              //@ts-ignore
              services[1].TEXT
            }
          />
        )}
        {services && (
          <ServiceItem
            key={
              //@ts-ignore

              services[0].ID
            }
            img={
              //@ts-ignore
              services[0].PICTURE
            }
            title={
              //@ts-ignore
              services[0].NAME
            }
            text={
              //@ts-ignore
              services[0].TEXT
            }
          />
        )}
        {services && (
          <ServiceItem
            key={
              //@ts-ignore
              services[2].ID
            }
            img={
              //@ts-ignore
              services[2].PICTURE
            }
            title={
              //@ts-ignore
              services[2].NAME
            }
            text={
              //@ts-ignore
              services[2].TEXT
            }
          />
        )}
        {services && (
          <ServiceItem
            key={
              //@ts-ignore
              services[3].ID
            }
            img={
              //@ts-ignore
              services[3].PICTURE
            }
            title={
              //@ts-ignore
              services[3].NAME
            }
            text={
              //@ts-ignore
              services[3].TEXT
            }
          />
        )}
        {/* {
          //@ts-ignore
          services?.map((service: any) => (
            <ServiceItem
              key={service.ID}
              img={service.PICTURE}
              title={service.NAME}
              text={service.TEXT}
            />
          ))
        } */}
      </div>
    </section>
  );
};

export default ServicesSection;
