export interface IAccordionProps {
  isShow: boolean;
  onClick: () => void;
  title: string;
  text?: string;
  count: number;
}
