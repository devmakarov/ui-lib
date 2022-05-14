import { FC, useContext, useEffect } from "react";
import { Children } from "types";
import { SELECT_OPTION, SELECT_OPTION_ACTIVE } from "./conts";
import useSelect from "./hooks/useSelect";
import { SelectContext } from "./Select";
import { UIOption, UISelectValue } from "./types";

const OptionWrapper: FC<UIOption & Children> = ({ id, label, children }) => {
  const { onChange, state } = useContext(SelectContext);
  const { value } = state;
  const { setActiveMultiple, setActive, initOption, closeSelect } = useSelect();

  const isMultiple = Array.isArray(value);
  const isActive = isMultiple ? value.includes(id) : value === id;

  const addToList = (e: UISelectValue) => {
    isMultiple ? setActiveMultiple(e) : setActive(e);
  };

  const onClick = (e: UISelectValue) => {
    addToList(e);
    onChange(e);

    !isMultiple && closeSelect();
  };

  const prepareClasses = () => {
    const activeClassName = isActive ? ` ${SELECT_OPTION_ACTIVE}` : "";
    return `${SELECT_OPTION}${activeClassName}`;
  };

  useEffect(() => {
    initOption(id, label);
  }, [initOption, id, label]);

  return (
    <div className={prepareClasses()} onClick={() => onClick(id)}>
      <span>{children}</span>
    </div>
  );
};

const Option: FC<UIOption & Children> = ({ children, id, label }) => {
  return (
    <OptionWrapper id={id} label={label}>
      {children}
    </OptionWrapper>
  );
};

export { Option };
