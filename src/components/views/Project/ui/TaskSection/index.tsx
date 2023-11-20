import { SectionTitle } from "@/components/ui/SectionTitle";
import s from "./styles.module.sass";
import { CalendarIcon } from "@/components/ui/CalendarIcon";
import { PinIcon } from "@/components/ui/PinIcon";
import { FC } from "react";
import { Skeleton } from "@/components/ui/Skeleton";
import Markdown from "react-markdown";
import he from "he";
interface ITaskSectionProps {
  task: string;
  decision: string;
}
const test = "&lt;br/&gt;";
const TaskSection: FC<ITaskSectionProps> = ({ task, decision }) => {
  return (
    <div className={s.section}>
      <div className={s.task}>
        <SectionTitle label="Задача" />

        {task ? (
          <div dangerouslySetInnerHTML={{ __html: he.decode(task) }}></div>
        ) : null}
      </div>
      <br />
      <div className={s.decision}>
        <SectionTitle label="Решение" />
        <div className={s.content}>
          {decision ? (
            <div
              dangerouslySetInnerHTML={{ __html: he.decode(decision) }}
            ></div>
          ) : null}
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
