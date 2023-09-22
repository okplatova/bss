import { clientsList } from "../../data/clientsList";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import ClientItem from "../ClientItem";

const ClientsSection = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <SectionTitle label="Клиенты" />
      </div>

      <div className={s.clientsListWrapper}>
        <div className={`${s.clientsList} ${s.reverse}`}>
          {clientsList.reverse().map((client) => (
            <ClientItem key={client.id} img={client.img} />
          ))}
          {clientsList.map((client) => (
            <ClientItem key={client.id} img={client.img} />
          ))}
        </div>
        <div className={s.clientsList}>
          {clientsList.map((client) => (
            <ClientItem key={client.id} img={client.img} />
          ))}
          {clientsList.reverse().map((client) => (
            <ClientItem key={client.id} img={client.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
