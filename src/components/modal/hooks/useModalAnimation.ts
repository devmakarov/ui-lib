import { useEffect, useState } from "react";
import {
  ANIMATION_DURATION,
  MODAL_HIDE_CLASS,
  MODAL_SHOW_CLASS,
} from "../const";

function useModalAnimation(visible: boolean) {
  const isShowingStarted = visible;

  const [isHidden, setIsHidden] = useState(() => true);
  const [modalClassName, setClassName] = useState(() => "");

  const startShowAnimation = () => {
    setClassName(MODAL_SHOW_CLASS);
    setIsHidden(false);
  };

  const startHideAnimation = () => {
    if (!modalClassName) return;

    setClassName(`${modalClassName} ${MODAL_HIDE_CLASS}`);
    setIsHidden(false);
  };

  const clearAnimation = () => {
    setTimeout(() => {
      setClassName("");
      setIsHidden(true);
    }, ANIMATION_DURATION);
  };

  useEffect(() => {
    if (isShowingStarted) {
      startShowAnimation();
      return;
    }

    startHideAnimation();
    clearAnimation();
  }, [visible]);

  return {
    isHidden,
    modalClassName,
  };
}

export default useModalAnimation;
