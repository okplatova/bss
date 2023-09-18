import { SectionTitle } from "@/components/ui/SectionTitle";
import s from "./styles.module.sass";
import { CalendarIcon } from "@/components/ui/CalendarIcon";
import { PinIcon } from "@/components/ui/PinIcon";

const TaskSection = () => {
  return (
    <div className={s.section}>
      <div className={s.task}>
        <SectionTitle label="Задача" />
        <p>
          Мероприятий деловой и культурной программы, основным элементом
          которого являлся большой дуговой панорамный экран, шириной 42 и высото
          В рамках жеребъевки нужно было организовать пространство для
          спортивной и культурной программы, основным концептом которого
          являлся.
        </p>
      </div>
      <div className={s.decision}>
        <SectionTitle label="Решение" />
        <div className={s.content}>
          <p>
            Для проекции на Дом Правительства Российской Федерации были
            использованы 36 проекторов Christie Boxer 4K30 и два сервера d3 4х4
            Pro 2.Площадь засветки - 4 500 кв.м.
          </p>
          <p>
            Для проекции на здания на Проспекте Сахарова: здание ВнешЭконом
            Банка, здание Международного Инвестиционного банка и здание
            Международного банка экономического сотрудничества были использованы
            24 проектора Christie Boxer 4K30 и 12 проекторов Christie 20K. 2
            серевра d3 GX-2 и сервер d3 4x4 Pro.Общая площадь засветки трёх
            зданий - 4 800 кв. м.
          </p>
        </div>
      </div>
      <div className={s.info}>
        <div className={s.infoItem}>
          <CalendarIcon />
          <span>06.06.2018</span>
        </div>
        <div className={s.infoItem}>
          <PinIcon />
          <span>Москва, Государственный Кремлевский Дворец</span>
        </div>
      </div>
    </div>
  );
};

export default TaskSection;
