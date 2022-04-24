import { FC } from "react";
import { Children } from "types";
import { MODAL_OVERLAY_DEFAULT_CLASS } from "./const";

const ModalOverlay: FC<Children> = () => {
  return <div className={MODAL_OVERLAY_DEFAULT_CLASS}></div>;
};

export default ModalOverlay;
