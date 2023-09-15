export interface IButtonProps {
  variable?: "primary" | "secondary" | "clear" | "rounded";
  size: "large" | "medium" | "small";
  className?: string;
  onClick?: () => void;
  count?: number;
  isActive?: boolean;
}
