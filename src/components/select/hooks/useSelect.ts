import { useCallback, useContext } from "react";
import { SelectContext } from "../Select";
import { UISelectValue } from "../types";

function useSelect() {
  const { state, dispatch } = useContext(SelectContext);
  const { value, isOpen } = state;

  const setActive = useCallback((e: UISelectValue) => {
    dispatch({ type: "SET_ACTIVE", payload: e });
  }, [dispatch]);

  const setActiveMultiple = useCallback((e: UISelectValue) => {
    if (!Array.isArray(value)) return;

    const index = value.findIndex((item) => item === e);
    if (index === -1) {
      dispatch({ type: "SET_ACTIVE", payload: [...value, e] });
    } else {
      const newValue = value.filter((item) => {
        return item !== e;
      });
      dispatch({ type: "SET_ACTIVE", payload: newValue });
    }
  }, [dispatch, value]);

  const closeSelect = useCallback(() => {
    dispatch({ type: "SET_IS_OPEN", payload: false });
  }, [dispatch]);

  const initOption = useCallback((id: UISelectValue, label: string) => {
    dispatch({
      type: "ADD_TO_LIST",
      payload: {
        id,
        label,
      },
    });
  }, [dispatch]);

  const toggleSelect = useCallback(() => {
    dispatch({ type: "SET_IS_OPEN", payload: !isOpen });
  }, [dispatch, isOpen]);

  return {
    setActive,
    setActiveMultiple,
    initOption,
    closeSelect,
    toggleSelect,
  };
}

export default useSelect;
