import { ReactNode, MouseEvent } from "react";

export type ButtonSizes = "small" | "medium" | "large";
export type ButtonTypes = "primary" | "info" | "success" | "danger";

type BtnStyles = Record<string, number | string>;

export interface UIButton {
  className?: string;
  type?: ButtonTypes;
  size?: ButtonSizes;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: BtnStyles;
}
