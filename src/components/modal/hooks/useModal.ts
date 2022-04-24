import { useCallback, useState } from "react";

function useModal() {
  const [isVisible, setIsVisible] = useState(() => false);

  const closeModal = useCallback(() => setIsVisible(false), []);
  const openModal = useCallback(() => setIsVisible(true), []);

  return { isVisible, closeModal, openModal };
}

export default useModal;