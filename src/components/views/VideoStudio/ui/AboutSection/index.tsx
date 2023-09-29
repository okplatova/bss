import { motion } from "framer-motion";
import Image from "next/image";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Title } from "@/components/ui/Title";

const AboutSection = () => {
  return (
    <section className={`${s.about} container`}>
      <SectionTitle label="О студии" />
      <div className={s.sectionItemList}>
        <div className={s.sectionItem}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={s.imageWrapper}
          >
            <Image src="/videost1.jpg" fill alt="video studio" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={s.text}
          >
            <Title variant="h3">Воплощаем идеи в реальность</Title>
            <div className={s.paragraphs}>
              <p>
                Наша команда опытных специалистов занимается всем процессом
                создания видео контента – от концепта и сценаризации до съемки,
                монтажа и пост-продакшна. Мы работаем в тесном сотрудничестве с
                вами, чтобы понять ваше видение и цели, а также учесть
                особенности и требования.
              </p>
              <p>
                Предлагаем разнообразные стили и жанры видео, включая
                презентационные видеоролики, корпоративные видео, рекламные
                ролики, интервью, озвученные презентации и многое другое. Мы
                также можем создать анимацию, графику движения и спецэффекты,
                чтобы добавить дополнительный визуальный эффект и привлечь
                внимание аудитории
              </p>
            </div>
          </motion.div>
        </div>
        <div className={s.sectionItem}>
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={s.text}
          >
            <Title variant="h3">Воплощаем идеи в реальность</Title>
            <div className={s.paragraphs}>
              <p>
                Наша команда опытных специалистов занимается всем процессом
                создания видео контента – от концепта и сценаризации до съемки,
                монтажа и пост-продакшна. Мы работаем в тесном сотрудничестве с
                вами, чтобы понять ваше видение и цели, а также учесть
                особенности и требования.
              </p>
              <p>
                Предлагаем разнообразные стили и жанры видео, включая
                презентационные видеоролики, корпоративные видео, рекламные
                ролики, интервью, озвученные презентации и многое другое. Мы
                также можем создать анимацию, графику движения и спецэффекты,
                чтобы добавить дополнительный визуальный эффект и привлечь
                внимание аудитории
              </p>
            </div>
          </motion.div>
          <motion.div
            className={s.imageWrapper}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image src="/videost2.jpg" fill alt="video studio" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
