import { MouseEvent, ReactNode } from "react";

export type ModalStyle = Record<string, number | string>;

export interface UIModal {
  visible: boolean;
  onCancel: (e: MouseEvent<HTMLDivElement>) => void;
  style?: ModalStyle;
  zIndex?: number;
  className?: string;
}

export interface UIModalContent {
  className?: string;
}

export interface UIModalAnimatedContent {
  isHidden: boolean;
} 