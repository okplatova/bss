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
  const fetchData = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://dev9.paradigma-digital.ru/complex/",
      });
      console.log("res", res.data[0].CONTENT);
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    fetchData();
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
