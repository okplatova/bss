import { useState } from "react";
import s from "./styles.module.sass";

const Burger = () => {
  const [isActive, setActive] = useState(false);
  return (
    <div onClick={() => setActive(true)} className={s.burgerWrapper}>
      <span>Меню</span>
      <div className={`${s.burger} ${isActive ? s.active : s.default}`} />
    </div>
  );
};

export default Burger;
