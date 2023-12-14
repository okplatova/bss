import s from "./styles.module.sass";

import ServicesSection from "../ServicesSection";
import Hero from "../Hero";
import ProjectSection from "../ProjectSection";
import EquipmentSection from "../EquipmentSection";
import ClientsSection from "../ClientsSection";
import ContactsSection from "../ContactsSection";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const res = async () => {
    const res = await fetch("https://dev9.paradigma-digital.ru/equipment/");
    const data = await res.json();

    //@ts-ignore
    let total = [];
    //@ts-ignore
    let item = [];
    console.log("data", data);

    Object.values(data).forEach((product: any) => {
      //@ts-ignore
      product.CHILD &&
        Object.values(product.CHILD).forEach((child) => {
          //@ts-ignore
          if (child.CHILD) {
            //@ts-ignore
            Object.values(child.CHILD).filter((item) => {
              //@ts-ignore
              total = [...total, ...Object.values(item.ITM)];
            });
          }
          //@ts-ignore
          if (!child.ITM) {
            return;
          }
          //@ts-ignore
          if (child.ITM === Array) {
            //@ts-ignore
            total = [...total, ...child.ITM];
            //@ts-ignore
          } else {
            //@ts-ignore
            total = [...total, ...Object.values(child.ITM)];
          }
        });
      //@ts-ignore
      const uniqueArray = total.filter(
        (obj, index, self) =>
          index ===
          self.findIndex(
            (o) => o.CONTENT["Заголовок"] === obj.CONTENT["Заголовок"]
          )
      );
      //@ts-ignore
      // const filter = uniqueArray.filter((itm) => {
      //   return (
      //     itm.CONTENT["Заголовок"].split(" ").join("-").toLowerCase() ===
      //     //@ts-ignore
      //     context.params.slug.split(" ").join("-").toLowerCase()
      //   );
      // });

      // if (filter.length !== 0) {
      //   item.push(filter[0]);
      // }
    });

    //@ts-ignore
    if (!item || item.length === 0) {
      return {
        notFound: true,
      };
    }
  };

  useEffect(() => {
    res();
  }, []);
  return (
    <div className={s.home}>
      <Hero />
      <ServicesSection />
      <ProjectSection />
      <EquipmentSection />
      <ClientsSection />
      <ContactsSection />
    </div>
  );
};

export default Home;
