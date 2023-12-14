import { FC } from "react";
import s from "./styles.module.sass";

const Input: FC<any> = ({ register, id, pattern, onChange, value }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      {...register(id, { pattern })}
      value={value}
      className={s.input}
    />
  );
};

export default Input;
