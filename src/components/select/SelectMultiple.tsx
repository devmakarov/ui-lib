import { FC, useContext, useRef } from "react";
import { Children } from "types";
import { SELECT, SELECT__MULTIPLE, SELECT__MULTIPLE_CLEAR, SELECT__MULTIPLE_LABEL } from "./conts";
import useClickOutside from "./hooks/useClickOutside";
import useSelect from "./hooks/useSelect";
import { SelectContext } from "./Select";
import { SelectBody } from "./SelectBody";
import SelectHead from "./SelectHead";
import { UISelectValue } from "./types";

const SelectMultiple: FC<Children> = ({ children }) => {
  const { state } = useContext(SelectContext);
  const { isOpen, value, list } = state;
  const { setActiveMultiple } = useSelect();
  const root = useRef<HTMLDivElement>(null);
  useClickOutside(root);

  const activeOption = (id: UISelectValue) => {
    const item = list.find((e) => e.id === id);
    return item ? item.label : null;
  };

  const removeActiveOption = (id: UISelectValue) => {
    setActiveMultiple(id);
  };

  return (
    <div className={SELECT} ref={root}>
      <SelectHead>
        {Array.isArray(value) && value.length > 0
          ? value.map((id: UISelectValue) => {
              return (
                <div className={SELECT__MULTIPLE} key={id + ""}>
                  <span className={SELECT__MULTIPLE_LABEL}>
                    {activeOption(id)}
                  </span>
                  <span
                    className={SELECT__MULTIPLE_CLEAR}
                    onClick={() => removeActiveOption(id)}
                  >
                    x
                  </span>
                </div>
              );
            })
          : "Select option.."}
      </SelectHead>

      <SelectBody isOpen={isOpen}>{children}</SelectBody>
    </div>
  );
};

export { SelectMultiple };
