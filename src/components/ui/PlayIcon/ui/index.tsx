import s from "./styles.module.sass";

import { TriangleIcon } from "../../TriangleIcon";

const PlayIcon = () => {
  return (
    <div className={s.playIcon}>
      <TriangleIcon />
    </div>
  );
};

export default PlayIcon;
