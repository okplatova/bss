import { SectionTitle } from "@/components/ui/SectionTitle";
import s from "./styles.module.sass";
import { CalendarIcon } from "@/components/ui/CalendarIcon";
import { PinIcon } from "@/components/ui/PinIcon";
import { FC } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

interface ITaskSectionProps {
  task: string;
  decision: string;
}

const TaskSection: FC<ITaskSectionProps> = ({ task, decision }) => {
  return (
    <div className={s.section}>
      <div className={s.task}>
        <SectionTitle label="Задача" />
        {task ? (
          <p dangerouslySetInnerHTML={{ __html: task }}></p>
        ) : (
          <Skeleton className={s.taskSkeleton} />
        )}
      </div>
      <div className={s.decision}>
        <SectionTitle label="Решение" />
        <div className={s.content}>
          {decision ? (
            <p dangerouslySetInnerHTML={{ __html: decision }}></p>
          ) : (
            <Skeleton className={s.decisionSkeleton} />
          )}
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
