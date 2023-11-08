import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { IProjectItemProps } from "../types/projectItem.interface";

import s from "./styles.module.sass";

import { PlusIcon } from "@/components/ui/PlusIcon";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";

const ProjectItem: FC<IProjectItemProps> = ({
  title,
  year,
  img,
  isGrid = true,
  customStyles,
}) => {
  const projectClass = `${s.projectItem} ${!isGrid ? s.list : ""}`;
  console.log("Skeleton", title.split(" ").join("-").toLowerCase());
  return (
    <Link
      href={`/project/${title.split(" ").join("-").toLowerCase()}`}
      className={projectClass}
      style={{ ...customStyles }}
    >
      <div className={s.imageWrapper}>
        <Button
          size="large"
          variable="rounded"
          className={s.btn}
          ariaLabel="transition"
        >
          <PlusIcon />
        </Button>
        <Image
          src={`https://dev9.paradigma-digital.ru/${img}`}
          alt="project"
          fill
          loading="lazy"
        />
      </div>
      <div className={s.text}>
        <span className={s.title}>{title}</span>
        <span className={s.year}>{year}</span>
        <span className={s.arrow}>
          <ArrowRightIcon />
        </span>
      </div>
    </Link>
  );
};

export default ProjectItem;
