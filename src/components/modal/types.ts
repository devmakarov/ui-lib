import { MouseEvent, ReactNode } from "react";

export type ModalStyle = Record<string, number | string>;

export interface UIModal {
  visible: boolean;
  onCancel: (e: MouseEvent<HTMLDivElement>) => void;
  style?: ModalStyle;
  children?: ReactNode;
  zIndex?: number;
  className?: string;
}

export interface UIModalContent {
  children?: ReactNode;
  className?: string;
}
