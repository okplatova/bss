import dynamic from "next/dynamic";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactItem } from "@/components/common/ContactItem";

const DynamicMap = dynamic(
  () => import("@/components/common/ContactMap/ui/index"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const ContactsSection = () => {
  return (
    <section className={s.section}>
      <div className={`${s.contactsInfo} container`}>
        <SectionTitle label="Контакты" color="black" />
        <div className={s.contactsInfoContent}>
          <div className={s.address}>
            <h6>Адрес</h6>
            <p>
              г. Москва, Алтуфьевское шоссе, дом 37, стр.1 Логистический центр
              &quot;Аврора&quot;
            </p>
          </div>
          <div className={s.contactsList}>
            <ContactItem
              title="Телефоны для связи"
              links={["+7 (499) 136-24-44", "+7 (905) 509-72-72"]}
            />
            <ContactItem title="Email" links={["info@bss-tv.com"]} isMail />
            <ContactItem title="Факс" links={["+7 (495) 931-99-09"]} />
            <ContactItem
              title="Финансовый отдел"
              links={["+7 (495) 600-06-38"]}
            />
          </div>
        </div>
      </div>
      <DynamicMap />
    </section>
  );
};

export default ContactsSection;
