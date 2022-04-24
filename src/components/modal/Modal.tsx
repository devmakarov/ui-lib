import {
  FC,
  useState,
  MouseEvent,
  useEffect,
  memo,
  useCallback,
  useRef,
} from "react";
import { UIModal, UIModalContent } from "./types";
import "./index.scss";
import {
  MODAL_CONTENT_DEFAULT_CLASS,
  MODAL_DEFAULT_CLASS,
  MODAL_HIDE_CLASS,
  MODAL_OVERLAY_DEFAULT_CLASS,
  MODAL_SHOW_CLASS,
} from "./const";

function useModal() {
  const [isVisible, setIsVisible] = useState(() => false);

  const closeModal = useCallback(() => setIsVisible(false), []);
  const openModal = useCallback(() => setIsVisible(true), []);

  return { isVisible, closeModal, openModal };
}

function useAnimatedClassName(visible: boolean) {
  const firstInit = useRef(false);
  const [{ canShow, className }, setState] = useState(() => ({
    canShow: false,
    className: "",
  }));

  useEffect(() => {
    if (visible) {
      setState({
        className: MODAL_SHOW_CLASS,
        canShow: true,
      });
      firstInit.current === false && (firstInit.current = true);
      return;
    }

    if (!firstInit.current) return;

    setState({
      className: `${className} ${MODAL_HIDE_CLASS}`,
      canShow: true,
    });
    setTimeout(() => {
      setState({
        className: "",
        canShow: false,
      });
    }, 300);
  }, [visible]);

  return {
    canShow,
    animatedClassName: className,
  };
}

const ModalContent: FC<UIModalContent> = ({ children, className }) => {
  return (
    <div className={`${MODAL_CONTENT_DEFAULT_CLASS} ${className}`}>
      {children}
    </div>
  );
};

const Modal: FC<UIModal> = ({
  onCancel,
  visible,
  children,
  className = "",
}) => {
  const { canShow, animatedClassName } = useAnimatedClassName(visible);

  const prepareClasses = () => {
    const defaultClassName = MODAL_DEFAULT_CLASS;
    return `${defaultClassName} ${animatedClassName}`;
  };
  const modalClassNames = prepareClasses();

  const hideByClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (!visible) return;
    const target = e.target as HTMLDivElement;

    if (target.classList.contains(MODAL_OVERLAY_DEFAULT_CLASS) && onCancel) {
      onCancel(e);
    }
  };

  return (
    // Create Modal Provider
    <div className={modalClassNames} onClick={hideByClickOutside} tabIndex={-1}>
      {/* move to AnimatedBoxComponent */}
      {canShow && (
        <>
          <div className={MODAL_OVERLAY_DEFAULT_CLASS}></div>
          <ModalContent className={className}>{children}</ModalContent>
        </>
      )}
    </div>
  );
};

Modal.displayName = "Modal";

export default memo(Modal);
export { useModal };
