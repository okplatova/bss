import s from "./styles.module.sass";

import ServicesSection from "../ServicesSection";
import Hero from "../Hero";
import ProjectSection from "../ProjectSection";
import EquipmentSection from "../EquipmentSection";
import ClientsSection from "../ClientsSection";
import ContactsSection from "../ContactsSection";

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
