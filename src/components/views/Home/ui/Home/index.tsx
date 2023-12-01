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
  const test = async () => {
    const res = await fetch("https://dev9.paradigma-digital.ru/equipment/");
    const data = await res.json();
    console.log("data", data);
    //@ts-ignore
    let total = [];
    //@ts-ignore
    let item = [];
    const product = Object.values(data).map((product: any) => {
      const filteredProduct =
        product.CHILD &&
        Object.values(product.CHILD).forEach((child) => {
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
      console.log("total", total);
      console.log("filteredProduct", filteredProduct);
      //@ts-ignore
      const filter = total.filter((obj2: any) => {
        return (
          //@ts-ignore
          obj2.CONTENT["Заголовок"].split(" ").join("-").toLowerCase()
        );
      });
      // console.log("filter", filter);

      if (filter.length !== 0) {
        item.push(filter[0]);
      }
      //@ts-ignore
      return item[0];
    });
    //@ts-ignore
    console.log("product", product);
    //@ts-ignore
    console.log("item", item);
    //@ts-ignore
    const uniqueArray = total.filter(
      (obj, index, self) =>
        index ===
        self.findIndex(
          (o) => o.CONTENT["Заголовок"] === obj.CONTENT["Заголовок"]
        )
    );
    console.log("uniqueArray", uniqueArray);

    //@ts-ignore
    const paths = uniqueArray.map((item: any) => ({
      params: {
        slug: item.CONTENT["Заголовок"].split(" ").join("-").toLowerCase(),
      },
    }));
    console.log("paths", paths);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className={s.home}>
      <Hero />
      <ServicesSection />
      <ProjectSection />
      <EquipmentSection />
      {/* <ClientsSection /> */}
      <ContactsSection />
    </div>
  );
};

export default Home;
