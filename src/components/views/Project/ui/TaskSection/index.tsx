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
  location: string;
  date: string;
}
const test = "&lt;br/&gt;";
const TaskSection: FC<ITaskSectionProps> = ({
  task,
  decision,
  location,
  date,
}) => {

  console.log('decision',decision);
  
  return (
    <div className={s.section}>
      {/* <div className={s.task}>
        <SectionTitle label="Задача" />

        {task ? (
          <div dangerouslySetInnerHTML={{ __html: he.decode(task) }}></div>
        ) : null}
      </div> */}
      <br />
      <div className={s.decision}>
        <SectionTitle label="Описание" />
        <div className={s.content}>
          {decision ? (
            <div
              dangerouslySetInnerHTML={{ __html: he.decode(decision) }}
            ></div>
          ) : null}
        </div>
      </div>
      <div className={s.info}>
        {date ? (
          <div className={s.infoItem}>
            <CalendarIcon />
            <span>{date}</span>
          </div>
        ) : null}

        {location ? (
          <div className={s.infoItem}>
            <PinIcon />
            <span>{location}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TaskSection;
