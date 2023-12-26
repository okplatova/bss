import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IProjectItemProps } from "../types/projectItem.interface";

import s from "./styles.module.sass";

import { PlusIcon } from "@/components/ui/PlusIcon";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import he from "he";
import translate from "translate";
import { handleTranslate } from "@/shared/helpers/translate";
import { useTranslate } from "@/shared/hooks";
const ProjectItem: FC<IProjectItemProps> = ({
  title,
  year,
  img,
  isGrid = true,
  customStyles,
  link,
}) => {
  const projectClass = `${s.projectItem} ${!isGrid ? s.list : ""}`;

  return (
    <Link href={link} className={projectClass} style={{ ...customStyles }}>
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
          src={`https://adm.bss-tv.com/${img}`}
          alt="project"
          fill
          loading="lazy"
        />
      </div>
      <div className={s.text}>
        <span
          className={s.title}
          dangerouslySetInnerHTML={{ __html: he.decode(title) }}
        ></span>
        <span className={s.year}>{year}</span>
        <span className={s.arrow}>
          <ArrowRightIcon />
        </span>
      </div>
    </Link>
  );
};

export default ProjectItem;
