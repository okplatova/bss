import { StaticImageData } from "next/image";

export interface IAccordionContentProps {
  accordion: Accordion;
}

type Accordion = {
  id: number;
  title: string;
  img: StaticImageData;
  equipments: Equipment[];
};

type Equipment = {
  id: number;
  title: string;
  type: string;
  options: string[];
};
