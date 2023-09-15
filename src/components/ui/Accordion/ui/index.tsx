import { FC } from "react";
import s from "./styles.module.sass";
import { Title } from "../../Title";
import { OutlineArrowTop } from "../../OutlineArrowTop";

const Accordion: FC<any> = ({
  children,
  isShow,
  onClick,
  title,
  text,
  count,
}) => {
  const accordionClass = `${s.accordion} ${isShow ? s.active : ""}`;
  const contentClass = `${s.content} ${isShow ? s.show : ""}`;

  return (
    <div className={accordionClass}>
      <div onClick={onClick} className={s.titleWrapper}>
        <Title variant="h5" className={s.title}>
          {title}
          <span className={s.count}>{count}</span>
        </Title>
        <OutlineArrowTop />
      </div>

      <div className={contentClass}>{text ? text : children}</div>
    </div>
  );
};

export default Accordion;
