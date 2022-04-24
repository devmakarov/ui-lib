import { forwardRef, memo, MouseEvent } from "react";
import {
  BUTTON_DEFAULT_CLASS,
  BUTTON_DEFAULT_SIZE,
  BUTTON_PRIMARY_CLASS,
} from "./conts";
import "./index.scss";
import { UIButton } from "./types";

const Button = forwardRef<HTMLButtonElement, UIButton>((props, ref) => {
  const {
    type,
    size,
    disabled = false,
    onClick,
    children,
    style: customStyles,
    className = "",
  } = props;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    onClick && onClick(e);
  };

  const prepareClasses = (): string => {
    const typeClassName = type ? `ui-btn_${type}` : BUTTON_PRIMARY_CLASS;
    const sizeClassName = size ? `ui-btn_${size}` : BUTTON_DEFAULT_SIZE;

    return `${BUTTON_DEFAULT_CLASS} ${typeClassName} ${sizeClassName} ${className}`;
  };
  const classNames = prepareClasses();

  return (
    <button
      className={classNames}
      style={{ ...customStyles }}
      disabled={disabled}
      ref={ref}
      onClick={handleClick}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default memo(Button);
