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
