import dynamic from "next/dynamic";

import s from "./styles.module.sass";

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Title } from "@/components/ui/Title";
import { ContactItem } from "@/components/common/ContactItem";

const DynamicMap = dynamic(
  () => import("@/components/common/ContactMap/ui/index"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const breadcrumbs = [
  {
    label: "Главная",
    link: "/",
  },
  {
    label: "Контакты",
  },
];

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <Breadcrumbs items={breadcrumbs} />
      <div className={s.content}>
        <div className={`${s.contactsInfo} container`}>
          <Title variant="h1" className={s.title}>
            Контакты
          </Title>
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
                className={s.contactItem}
                title="Телефоны для связи"
                links={["+7 (900) 845-14-41", "+7 (903) 796-24-14"]}
              />
              <ContactItem
                className={s.contactItem}
                title="Email"
                links={["infi@bss-tv.com"]}
                isMail
              />
              <ContactItem
                className={s.contactItem}
                title="Факс"
                links={["+7 (495) 931-99-09"]}
              />
              <ContactItem
                className={s.contactItem}
                title="Финансовый отдел"
                links={["+7 (495) 600-06-38"]}
              />
            </div>
          </div>
        </div>
        <DynamicMap />
      </div>
    </div>
  );
};

export default Contacts;
