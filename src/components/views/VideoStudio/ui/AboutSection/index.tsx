import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Title } from "@/components/ui/Title";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className={`${s.about} container`}>
      <SectionTitle label="О студии" />
      <div className={s.sectionItemList}>
        <div className={s.sectionItem}>
          <div className={s.imageWrapper}>
            <Image src="/videost1.jpg" fill alt="video studio" />
          </div>
          <div className={s.text}>
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
          </div>
        </div>
        <div className={s.sectionItem}>
          <div className={s.text}>
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
          </div>
          <div className={s.imageWrapper}>
            <Image src="/videost2.jpg" fill alt="video studio" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
