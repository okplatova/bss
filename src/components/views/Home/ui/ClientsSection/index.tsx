import { useEffect, useRef } from "react";
import { useInView } from "react-hook-inview";

import { clientsList } from "../../data/clientsList";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import ClientItem from "../ClientItem";

const ClientsSection = () => {
  const topListRef = useRef<any>(null);
  const bottomListRef = useRef<any>(null);

  const [clients, inViewClients] = useInView();

  // useEffect(() => {
  //   topListRef.current!.scrollLeft = 300;
  //   //@ts-ignore
  //   bottomListRef.current!.scrollLeft = 400;

  //   let lastScrollTop = 0;
  //   const handleScroll = () => {
  //     let st = window.scrollY || document.documentElement.scrollTop;
  //     if (st > lastScrollTop) {
  //       topListRef.current!.scrollLeft += 1;

  //       bottomListRef.current!.scrollLeft -= 1;
  //     } else if (st < lastScrollTop) {
  //       topListRef.current!.scrollLeft -= 1;
  //       bottomListRef.current!.scrollLeft += 1;
  //     }
  //     lastScrollTop = st <= 0 ? 0 : st;
  //   };
  //   if (inViewClients) {
  //     window.addEventListener("scroll", handleScroll);
  //   }

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [inViewClients]);

  useEffect(() => {

  }, [])

  return (
    <section className={s.section}>
      <div className="container">
        <SectionTitle label="Клиенты" />
      </div>

      <div ref={clients} className={s.clientsListWrapper}>
        <div ref={topListRef} className={`${s.clientsList} ${s.reverse}`}>
          {clientsList.reverse().map((client) => (
            <ClientItem key={client.id} img={client.img} />
          ))}
          {clientsList.map((client) => (
            <ClientItem key={client.id} img={client.img} />
          ))}
        </div>
        <div ref={bottomListRef} className={s.clientsList}>
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
