import { FC, useContext, useRef } from "react";
import { Children } from "types";
import { SELECT } from "./conts";
import useClickOutside from "./hooks/useClickOutside";
import { SelectContext } from "./Select";
import { SelectBody } from "./SelectBody";
import SelectHead from "./SelectHead";

const SelectDefault: FC<Children> = ({ children }) => {
  const { state } = useContext(SelectContext);
  const { value, list, isOpen } = state;
  const root = useRef<HTMLDivElement>(null);
  useClickOutside(root);

  const activeOption = () => {
    const item = list.find((e) => e.id === value);
    return item ? item.label : "Select option..";
  };

  return (
    <div className={SELECT} ref={root}>
      <SelectHead>
        <span>{activeOption()}</span>
      </SelectHead>
      <SelectBody isOpen={isOpen}>{children}</SelectBody>
    </div>
  );
};

export { SelectDefault };
