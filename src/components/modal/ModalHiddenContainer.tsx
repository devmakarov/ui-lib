import { FC } from "react";
import { Children } from "types";
import { UIModalAnimatedContent } from "./types";

const ModalHiddenContainer: FC<UIModalAnimatedContent & Children> = ({
  isHidden,
  children,
}) => {
  return isHidden ? null : <>{children}</>;
};

export default ModalHiddenContainer;
