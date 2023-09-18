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
        <Button size="large" variable="rounded" className={s.btn}>
          <PlusIcon />
        </Button>
        <Image src={img} alt={title} fill />
      </div>
      <div className={s.text}>
        <h5>{title}</h5>
        <h6>{year}</h6>
      </div>
    </Link>
  );
};

export default ProjectItem;
