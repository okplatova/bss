import { FC } from "react";
import { ISkeletonProps } from "../types/skeleton.interface";
import styles from "./styles.module.sass";

const Skeleton: FC<ISkeletonProps> = ({ className }) => {
  return <div className={`${styles.skeleton} ${className}`} />;
};

export default Skeleton;
