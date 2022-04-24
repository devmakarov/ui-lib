import { ReactNode, MouseEvent } from "react";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonTypes = "primary" | "info" | "success" | "danger";

type BtnStyles = Record<string, number | string>;

export interface UIButton {
  className?: string;
  type?: ButtonTypes;
  size?: ButtonSize;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: BtnStyles;
}
