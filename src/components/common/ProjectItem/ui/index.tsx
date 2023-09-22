import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { IProjectItemProps } from "../types/projectItem.interface";

import s from "./styles.module.sass";
import { PlusIcon } from "@/components/ui/PlusIcon";
import { Button } from "@/components/ui/Button";

const ProjectItem: FC<IProjectItemProps> = ({ title, year, img }) => {
  return (
    <Link href="/project/project-item" className={s.projectItem}>
      <div className={s.imageWrapper}>
        <Button
          size="large"
          variable="rounded"
          className={s.btn}
          ariaLabel="transition"
        >
          <PlusIcon />
        </Button>
        <Image src={img} alt="project" fill loading="lazy" />
      </div>
      <div className={s.text}>
        <span className={s.title}>{title}</span>
        <span className={s.year}>{year}</span>
      </div>
    </Link>
  );
};

export default ProjectItem;
